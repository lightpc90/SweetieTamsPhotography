
  const phoneNumber = "2348134213010";
  const predefinedMessage = "Hi, Sweetie-Tams. I am messaging you from your website. I want book/make enquiry! My name is ...";

  export const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    predefinedMessage
  )}`;

