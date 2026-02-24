import Array "mo:core/Array";
import List "mo:core/List";
import AccessControl "authorization/access-control";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

actor {
  module Jurisdiction {
    public type Variant = {
      #Hyderabad;
      #Secunderabad;
      #Rangareddy;
      #Cyberabad;
    };

    func toNat(j : Variant) : Nat {
      switch (j) {
        case (#Hyderabad) { 0 };
        case (#Secunderabad) { 1 };
        case (#Rangareddy) { 2 };
        case (#Cyberabad) { 3 };
      };
    };

    public func compare(j1 : Variant, j2 : Variant) : Order.Order {
      Nat.compare(toNat(j1), toNat(j2));
    };
  };

  module LeadStatus {
    public type Variant = {
      #new;
      #contacted;
      #resolved;
    };

    func toNat(s : Variant) : Nat {
      switch (s) {
        case (#new) { 0 };
        case (#contacted) { 1 };
        case (#resolved) { 2 };
      };
    };

    public func compare(s1 : Variant, s2 : Variant) : Order.Order {
      Nat.compare(toNat(s1), toNat(s2));
    };
  };

  module TrendRelevance {
    public type Variant = { #local; #national };

    func toNat(r : Variant) : Nat {
      switch (r) {
        case (#local) { 0 };
        case (#national) { 1 };
      };
    };

    public func compare(r1 : Variant, r2 : Variant) : Order.Order {
      Nat.compare(toNat(r1), toNat(r2));
    };
  };

  module PracticeArea {
    public type Variant = {
      #familyLaw;
      #corporateLaw;
      #criminalDefense;
      #civilLitigation;
      #propertyLaw;
      #documentationServices;
      #taxLaw;
      #ipLaw;
      #startupLaw;
      #employmentLaw;
    };

    func toNat(a : Variant) : Nat {
      switch (a) {
        case (#familyLaw) { 0 };
        case (#corporateLaw) { 1 };
        case (#criminalDefense) { 2 };
        case (#civilLitigation) { 3 };
        case (#propertyLaw) { 4 };
        case (#documentationServices) { 5 };
        case (#taxLaw) { 6 };
        case (#ipLaw) { 7 };
        case (#startupLaw) { 8 };
        case (#employmentLaw) { 9 };
      };
    };

    public func compare(a1 : Variant, a2 : Variant) : Order.Order {
      Nat.compare(toNat(a1), toNat(a2));
    };

    public func toText(area : Variant) : Text {
      switch (area) {
        case (#familyLaw) { "Family Law" };
        case (#corporateLaw) { "Corporate Law" };
        case (#criminalDefense) { "Criminal Defense" };
        case (#civilLitigation) { "Civil Litigation" };
        case (#propertyLaw) { "Property Law" };
        case (#documentationServices) { "Documentation Services" };
        case (#taxLaw) { "Tax Law" };
        case (#ipLaw) { "Intellectual Property (IP) Law" };
        case (#startupLaw) { "Startup Law" };
        case (#employmentLaw) { "Employment Law" };
      };
    };
  };

  type ContactFormSubmission = {
    id : Nat;
    phoneNumber : Text;
    name : Text;
    jurisdiction : Jurisdiction.Variant;
    email : Text;
    message : ?Text;
    timestamp : Time.Time;
    status : LeadStatus.Variant;
  };

  module ContactFormSubmission {
    public func compare(s1 : ContactFormSubmission, s2 : ContactFormSubmission) : Order.Order {
      Nat.compare(s1.id, s2.id);
    };
  };

  let contactFormSubmissions = Map.empty<Nat, ContactFormSubmission>();
  let contactFormSubmissionIds = List.empty<Nat>();
  var nextSubmissionId = 1;

  // Access control
  let accessControlState = AccessControl.initState();
  var isAccessControlInitialized = false;

  public shared ({ caller }) func initializeAccessControl() : async () {
    if (isAccessControlInitialized) {
      Runtime.trap("Access control already initialized");
    };
    AccessControl.initialize(accessControlState, caller);
    isAccessControlInitialized := true;
  };

  public query ({ caller }) func isAdminActorFieldInitialized() : async Bool {
    isAccessControlInitialized;
  };

  // Allow all callers including anonymous to check their role (guests return #guest)
  public query ({ caller }) func getCallerUserRole() : async AccessControl.UserRole {
    AccessControl.getUserRole(accessControlState, caller);
  };

  public shared ({ caller }) func assignCallerUserRole(user : Principal, role : AccessControl.UserRole) : async () {
    // Admin-only check happens inside AccessControl.assignRole
    AccessControl.assignRole(accessControlState, caller, user, role);
  };

  // Return false for anonymous users instead of trapping
  public query ({ caller }) func isCallerAdmin() : async Bool {
    if (caller.isAnonymous()) {
      return false;
    };
    AccessControl.isAdmin(accessControlState, caller);
  };

  // User profile management
  public type UserProfile = {
    name : Text;
    email : ?Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Contact form submission
  public type CreateContactFormSubmissionInput = {
    phoneNumber : Text;
    name : Text;
    jurisdiction : Jurisdiction.Variant;
    email : Text;
    message : ?Text;
  };

  public shared ({ caller }) func createContactFormSubmission(input : CreateContactFormSubmissionInput) : async Nat {
    // No authorization check - public contact form accessible to everyone including guests
    let id = nextSubmissionId;
    nextSubmissionId += 1;

    let submission : ContactFormSubmission = {
      id;
      phoneNumber = input.phoneNumber;
      name = input.name;
      jurisdiction = input.jurisdiction;
      email = input.email;
      message = input.message;
      timestamp = Time.now();
      status = #new;
    };

    contactFormSubmissions.add(id, submission);
    contactFormSubmissionIds.add(id);
    id;
  };

  public query ({ caller }) func getAllContactFormSubmissions() : async [ContactFormSubmission] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access leads");
    };

    let submissions = contactFormSubmissionIds.values().toArray().map(
      func(id) {
        switch (contactFormSubmissions.get(id)) {
          case (null) { Runtime.trap("Inconsistent submission state") };
          case (?submission) { submission };
        };
      }
    );
    submissions.sort();
  };

  public shared ({ caller }) func updateContactFormSubmissionStatus(id : Nat, status : LeadStatus.Variant) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update lead status");
    };

    switch (contactFormSubmissions.get(id)) {
      case (null) { Runtime.trap("Contact form submission not found") };
      case (?submission) {
        let updatedSubmission = { submission with status = status };
        contactFormSubmissions.add(id, updatedSubmission);
      };
    };
  };

  public query ({ caller }) func getContactFormSubmissionsByStatus(status : LeadStatus.Variant) : async [ContactFormSubmission] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access leads");
    };

    contactFormSubmissions.values().toArray().filter(
      func(submission) { submission.status == status }
    );
  };

  public query ({ caller }) func getContactFormSubmissionsByJurisdiction(jurisdiction : Jurisdiction.Variant) : async [ContactFormSubmission] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access leads");
    };

    contactFormSubmissions.values().toArray().filter(
      func(submission) { submission.jurisdiction == jurisdiction }
    );
  };

  // XML Sitemap Functionality
  public type SitemapEntry = {
    loc : Text;
    lastMod : ?Text;
    changeFreq : ?Text;
    priority : ?Nat;
  };

  // Explicitly define persistent site pages for sitemap
  let persistentPages = List.fromArray([
    "/",
    "/hyderabad",
    "/secunderabad",
    "/rangareddy",
    "/cyberabad",
    "/contact"
  ]);

  public query ({ caller }) func getSitemapEntries() : async [SitemapEntry] {
    // No authorization check - sitemap must be publicly accessible for search engines
    let entries = persistentPages.values().toArray().map(
      func(page) {
        {
          loc = "https://thejurists.in" # page;
          lastMod = null;
          changeFreq = null;
          priority = null;
        };
      }
    );
    entries;
  };

  // Blog Article Type and Functionality

  public type BlogArticle = {
    id : Nat;
    title : Text;
    content : Text;
    publishedDate : Time.Time;
    author : Text;
    category : PracticeArea.Variant;
  };

  // Use List for persistent blog article storage
  let blogArticles = List.empty<BlogArticle>();
  var nextBlogArticleId = 1;

  // Blog article management
  public shared ({ caller }) func addOrUpdateBlogArticle(article : BlogArticle) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can manage blog articles");
    };

    let filtered = blogArticles.filter(
      func(existing) { existing.id != article.id }
    );
    blogArticles.clear();
    blogArticles.addAll(filtered.values());

    let fullArticle = {
      article with id = if (article.id == 0) {
        nextBlogArticleId;
      } else {
        article.id;
      };
    };
    blogArticles.add(fullArticle);

    if (article.id == 0) {
      nextBlogArticleId += 1;
    };
  };

  public query ({ caller }) func getAllBlogArticles() : async [BlogArticle] {
    blogArticles.toArray();
  };

  public query ({ caller }) func getBlogArticleById(id : Nat) : async ?BlogArticle {
    blogArticles.values().find(
      func(article) { article.id == id }
    );
  };

  public query ({ caller }) func getBlogArticlesByCategory(category : PracticeArea.Variant) : async [BlogArticle] {
    blogArticles.toArray().filter(
      func(article) { article.category == category }
    );
  };

  // Trending topics functionality
  public type TrendingTopic = {
    id : Nat;
    title : Text;
    keywords : [Text];
    popularityScore : Nat;
    practiceArea : PracticeArea.Variant;
    trendRelevance : TrendRelevance.Variant;
    isPosted : Bool;
    timestamp : Time.Time;
  };

  module TrendingTopic {
    public func compare(t1 : TrendingTopic, t2 : TrendingTopic) : Order.Order {
      if (t1.popularityScore > t2.popularityScore) { return #less };
      if (t1.popularityScore < t2.popularityScore) { return #greater };
      Nat.compare(t2.id, t1.id);
    };
  };

  let trendingTopics = Map.empty<Nat, TrendingTopic>();
  let trendingTopicIds = List.empty<Nat>();
  var nextTrendingTopicId = 1;

  public shared ({ caller }) func createTrendingTopic(
    title : Text,
    keywords : [Text],
    popularityScore : Nat,
    practiceArea : PracticeArea.Variant,
    trendRelevance : TrendRelevance.Variant
  ) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can create trending topics");
    };

    let id = nextTrendingTopicId;
    nextTrendingTopicId += 1;

    let topic : TrendingTopic = {
      id;
      title;
      keywords;
      popularityScore;
      practiceArea;
      trendRelevance;
      isPosted = false;
      timestamp = Time.now();
    };

    trendingTopics.add(id, topic);
    trendingTopicIds.add(id);

    id;
  };

  public query ({ caller }) func getAllTrendingTopics() : async [TrendingTopic] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access trending topics");
    };

    trendingTopicIds.values().toArray().map(
      func(id) {
        switch (trendingTopics.get(id)) {
          case (null) { Runtime.trap("Inconsistent trending topic state") };
          case (?topic) { topic };
        };
      }
    );
  };

  public query ({ caller }) func getTrendingTopicsByPracticeArea(practiceArea : PracticeArea.Variant) : async [TrendingTopic] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access trending topics");
    };

    trendingTopics.values().toArray().filter(
      func(topic) { topic.practiceArea == practiceArea }
    );
  };

  public query ({ caller }) func getTrendingTopicsByTrendRelevance(trendRelevance : TrendRelevance.Variant) : async [TrendingTopic] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access trending topics");
    };

    trendingTopics.values().toArray().filter(
      func(topic) { topic.trendRelevance == trendRelevance }
    );
  };

  public shared ({ caller }) func markTrendingTopicAsPosted(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update trending topics");
    };

    switch (trendingTopics.get(id)) {
      case (null) { Runtime.trap("Trending topic not found") };
      case (?topic) {
        let updatedTopic = { topic with isPosted = true };
        trendingTopics.add(id, updatedTopic);
      };
    };
  };

  public query ({ caller }) func getUnpostedTrendingTopics() : async [TrendingTopic] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access trending topics");
    };

    trendingTopics.values().toArray().filter(
      func(topic) { not topic.isPosted }
    );
  };

  public query ({ caller }) func getPostedTrendingTopics() : async [TrendingTopic] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access trending topics");
    };

    trendingTopics.values().toArray().filter(
      func(topic) { topic.isPosted }
    );
  };

  // Service & Directory Expansion

  public type ServiceDetails = {
    title : Text;
    description : Text;
    keywords : [Text];
    jurisdiction : Jurisdiction.Variant;
    practiceArea : PracticeArea.Variant;
  };

  public query ({ caller }) func getServicesByJurisdiction(jurisdiction : Jurisdiction.Variant) : async [ServiceDetails] {
    // No authorization check - services are public
    servicesDirectory.values().toArray().filter(
      func(service) { service.jurisdiction == jurisdiction }
    );
  };

  public query ({ caller }) func getServicesByPracticeArea(practiceArea : PracticeArea.Variant) : async [ServiceDetails] {
    // No authorization check - services are public
    servicesDirectory.values().toArray().filter(
      func(service) { service.practiceArea == practiceArea }
    );
  };

  public query ({ caller }) func getAllServices() : async [ServiceDetails] {
    // No authorization check - services are public
    servicesDirectory.values().toArray();
  };

  // Legal Directory Expansion

  public type LegalListing = {
    name : Text;
    specialization : PracticeArea.Variant;
    jurisdiction : Jurisdiction.Variant;
    contact : Text;
  };

  public shared ({ caller }) func addLegalListing(listing : LegalListing) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can modify directory");
    };

    legalDirectory.add(legalDirectory.size(), listing);
  };

  public query ({ caller }) func getLegalDirectoryByJurisdiction(jurisdiction : Jurisdiction.Variant) : async [LegalListing] {
    // No authorization check - directory is public
    legalDirectory.values().toArray().filter(
      func(listing) { listing.jurisdiction == jurisdiction }
    );
  };

  public query ({ caller }) func getLegalDirectoryByPracticeArea(practiceArea : PracticeArea.Variant) : async [LegalListing] {
    // No authorization check - directory is public
    legalDirectory.values().toArray().filter(
      func(listing) { listing.specialization == practiceArea }
    );
  };

  public query ({ caller }) func getLegalDirectoryByJurisdictionAndPracticeArea(
    jurisdiction : Jurisdiction.Variant,
    practiceArea : PracticeArea.Variant
  ) : async [LegalListing] {
    // No authorization check - directory is public
    legalDirectory.values().toArray().filter(
      func(listing) {
        listing.jurisdiction == jurisdiction and listing.specialization == practiceArea
      }
    );
  };

  // Directory Data
  let servicesDirectory = Map.fromIter<Nat, ServiceDetails>([
    (
      1,
      {
        title = "Hyderabad Corporate Law";
        description = "Corporate law services in Hyderabad including company formation, restructuring, and contract management.";
        keywords = ["corporate law", "hyderabad", "company formation"];
        jurisdiction = #Hyderabad;
        practiceArea = #corporateLaw;
      },
    ),
    (
      2,
      {
        title = "Secunderabad Criminal Defense";
        description = "Criminal defense assistance covering all major offenses in the Secunderabad area.";
        keywords = ["criminal defense", "secunderabad", "criminal law"];
        jurisdiction = #Secunderabad;
        practiceArea = #criminalDefense;
      },
    ),
    (
      3,
      {
        title = "Rangareddy Family Law";
        description = "Family law services including divorce and custody disputes in Rangareddy.";
        keywords = ["family law", "rangareddy", "divorce"];
        jurisdiction = #Rangareddy;
        practiceArea = #familyLaw;
      },
    ),
    (
      4,
      {
        title = "Cyberabad Employment Law";
        description = "Employment law support focused on Cyberabad including labor disputes and compliance.";
        keywords = ["employment law", "cyberabad", "labor law"];
        jurisdiction = #Cyberabad;
        practiceArea = #employmentLaw;
      },
    ),
    (
      5,
      {
        title = "Tax Law Consulting for Startups";
        description = "Specialized tax law advisement for startups across all regions.";
        keywords = ["tax law", "startups", "hyderabad", "secunderabad", "rangareddy", "cyberabad"];
        jurisdiction = #Hyderabad;
        practiceArea = #taxLaw;
      },
    ),
    (
      6,
      {
        title = "Intellectual Property Law";
        description = "Full range of IP law services for Rapidly Growing Tech Sector.";
        keywords = ["intellectual property", "ip law", "patent", "trademark"];
        jurisdiction = #Cyberabad;
        practiceArea = #ipLaw;
      },
    ),
  ].values());

  let legalDirectory = Map.fromIter<Nat, LegalListing>([
    (
      1,
      {
        name = "Narsing Advocate";
        specialization = #corporateLaw;
        jurisdiction = #Hyderabad;
        contact = "+91 80080 12892";
      },
    ),
    (
      2,
      {
        name = "Shruthi Legal Services";
        specialization = #familyLaw;
        jurisdiction = #Rangareddy;
        contact = "+91 12345 67890";
      },
    ),
    (
      3,
      {
        name = "Ishwarya Legal Chamber";
        specialization = #criminalDefense;
        jurisdiction = #Cyberabad;
        contact = "+91 21312 41431";
      },
    ),
    (
      4,
      {
        name = "Prakash Court Associates";
        specialization = #documentationServices;
        jurisdiction = #Secunderabad;
        contact = "+91 99876 54321";
      },
    ),
    (
      5,
      {
        name = "Rahul Law Firm";
        specialization = #propertyLaw;
        jurisdiction = #Hyderabad;
        contact = "+91 44444 22222";
      },
    ),
    (
      6,
      {
        name = "Ishita Advocates";
        specialization = #taxLaw;
        jurisdiction = #Cyberabad;
        contact = "+91 55555 89898";
      },
    ),
  ].values());
};
