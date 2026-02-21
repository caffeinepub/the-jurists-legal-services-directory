import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SitemapEntry {
    loc: string;
    changeFreq?: string;
    priority?: bigint;
    lastMod?: string;
}
export type Time = bigint;
export interface BlogArticle {
    id: bigint;
    title: string;
    content: string;
    publishedDate: Time;
    author: string;
    category: Variant__1;
}
export interface TrendingTopic {
    id: bigint;
    popularityScore: bigint;
    title: string;
    isPosted: boolean;
    practiceArea: Variant__1;
    keywords: Array<string>;
    timestamp: Time;
    trendRelevance: Variant__2;
}
export interface LegalListing {
    contact: string;
    name: string;
    jurisdiction: Variant__3;
    specialization: Variant__1;
}
export interface ServiceDetails {
    title: string;
    description: string;
    practiceArea: Variant__1;
    jurisdiction: Variant__3;
    keywords: Array<string>;
}
export interface ContactFormSubmission {
    id: bigint;
    status: Variant;
    name: string;
    email: string;
    jurisdiction: Variant__3;
    message?: string;
    timestamp: Time;
    phoneNumber: string;
}
export interface CreateContactFormSubmissionInput {
    name: string;
    email: string;
    jurisdiction: Variant__3;
    message?: string;
    phoneNumber: string;
}
export interface UserProfile {
    name: string;
    email?: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export enum Variant {
    new_ = "new",
    resolved = "resolved",
    contacted = "contacted"
}
export enum Variant__1 {
    startupLaw = "startupLaw",
    employmentLaw = "employmentLaw",
    corporateLaw = "corporateLaw",
    taxLaw = "taxLaw",
    documentationServices = "documentationServices",
    propertyLaw = "propertyLaw",
    ipLaw = "ipLaw",
    civilLitigation = "civilLitigation",
    criminalDefense = "criminalDefense",
    familyLaw = "familyLaw"
}
export enum Variant__2 {
    national = "national",
    local = "local"
}
export enum Variant__3 {
    Secunderabad = "Secunderabad",
    Cyberabad = "Cyberabad",
    Rangareddy = "Rangareddy",
    Hyderabad = "Hyderabad"
}
export interface backendInterface {
    addLegalListing(listing: LegalListing): Promise<void>;
    addOrUpdateBlogArticle(article: BlogArticle): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createContactFormSubmission(input: CreateContactFormSubmissionInput): Promise<bigint>;
    createTrendingTopic(title: string, keywords: Array<string>, popularityScore: bigint, practiceArea: Variant__1, trendRelevance: Variant__2): Promise<bigint>;
    getAllBlogArticles(): Promise<Array<BlogArticle>>;
    getAllContactFormSubmissions(): Promise<Array<ContactFormSubmission>>;
    getAllServices(): Promise<Array<ServiceDetails>>;
    getAllTrendingTopics(): Promise<Array<TrendingTopic>>;
    getBlogArticleById(id: bigint): Promise<BlogArticle | null>;
    getBlogArticlesByCategory(category: Variant__1): Promise<Array<BlogArticle>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getContactFormSubmissionsByJurisdiction(jurisdiction: Variant__3): Promise<Array<ContactFormSubmission>>;
    getContactFormSubmissionsByStatus(status: Variant): Promise<Array<ContactFormSubmission>>;
    getLegalDirectoryByJurisdiction(jurisdiction: Variant__3): Promise<Array<LegalListing>>;
    getLegalDirectoryByJurisdictionAndPracticeArea(jurisdiction: Variant__3, practiceArea: Variant__1): Promise<Array<LegalListing>>;
    getLegalDirectoryByPracticeArea(practiceArea: Variant__1): Promise<Array<LegalListing>>;
    getPostedTrendingTopics(): Promise<Array<TrendingTopic>>;
    getServicesByJurisdiction(jurisdiction: Variant__3): Promise<Array<ServiceDetails>>;
    getServicesByPracticeArea(practiceArea: Variant__1): Promise<Array<ServiceDetails>>;
    getSitemapEntries(): Promise<Array<SitemapEntry>>;
    getTrendingTopicsByPracticeArea(practiceArea: Variant__1): Promise<Array<TrendingTopic>>;
    getTrendingTopicsByTrendRelevance(trendRelevance: Variant__2): Promise<Array<TrendingTopic>>;
    getUnpostedTrendingTopics(): Promise<Array<TrendingTopic>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    initializeAccessControl(): Promise<void>;
    isAdminActorFieldInitialized(): Promise<boolean>;
    isCallerAdmin(): Promise<boolean>;
    markTrendingTopicAsPosted(id: bigint): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    updateContactFormSubmissionStatus(id: bigint, status: Variant): Promise<void>;
}
