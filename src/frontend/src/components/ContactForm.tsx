interface ContactFormProps {
  defaultJurisdiction?: string;
  googleFormsUrl?: string;
}

export default function ContactForm({ googleFormsUrl }: ContactFormProps) {
  // User-provided Google Forms URL
  const formUrl =
    googleFormsUrl ||
    "https://docs.google.com/forms/d/e/1FAIpQLScwbjL6QpOP03v9AOZ4RXBWrsCjvRLgrdj86UHzAvUQZKyfUA/viewform?embedded=true";

  return (
    <div className="w-full">
      <iframe
        src={formUrl}
        width="640"
        height="978"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Contact Form - Submit an Enquiry"
        className="w-full min-h-[978px]"
      >
        Loading form...
      </iframe>
    </div>
  );
}
