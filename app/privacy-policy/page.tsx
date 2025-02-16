import { SubpageContent, SubpageHeader } from "@/components";

export default function PrivacyPolicy() {
  const policyData = {
    sections: [
      {
        header: "Privacy Policy",
        texts: [
          "Last Updated: Oct 24, 2024",
          "At Monks Pay, we are dedicated to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our mobile app and website services.",
        ],
      },
      {
        header: "Information We Collect",
        texts: [
          "We collect personal details such as your name, email address, phone number, and payment information to process your transactions.",
          "We also gather transaction data, including amounts, dates, and recipient details, as well as device information like IP addresses and browser types to ensure security.",
        ],
      },
      {
        header: "How We Use Your Information",
        texts: [
          "Your information is used to deliver Monks Pay services, process your payments, and send relevant notifications.",
          "We also use this data to improve our platform, enhance user experience, and add new features.",
          "We place a strong emphasis on security and use your data to prevent fraud and unauthorized access to your account.",
        ],
      },
      {
        header: "Sharing Your Information",
        texts: [
          "Monks Pay may share your information with trusted third-party service providers, such as payment processors, to help facilitate transactions.",
          "These providers are required to maintain the confidentiality and security of your data.",
          "We may also disclose information when required by law or to protect the rights and safety of Monks Pay and its users.",
        ],
      },
      {
        header: "Data Security",
        texts: [
          "We take the security of your personal information seriously and implement strong measures such as encryption and secure storage.",
          "While no system can guarantee 100% security, we continuously work to protect your account and data.",
        ],
      },
      {
        header: "Your Rights",
        texts: [
          "You have the right to access, update, or correct your personal information through your account settings at any time.",
          "If you wish to delete your data, you can contact us directly, though some information may need to be retained for legal purposes.",
        ],
      },
      {
        header: "Changes to this Policy",
        texts: [
          "This Privacy Policy may be updated to reflect changes in our services or legal requirements.",
          "Any significant updates will be communicated via email or within the app.",
        ],
      },
      {
        header: "Contact Us",
        texts: [
          "If you have any questions or concerns about this Privacy Policy, please contact Monks Pay Customer Support at hello@example.com.",
          "We are committed to keeping your information safe and ensuring transparency in how we handle your data.",
        ],
      },
    ],
  };

  return (
    <section id="privacyPolicy" className="container mx-auto px-5 mt-5">
      <SubpageHeader title="Privacy Policy" />
      {policyData.sections.map((section, index) => (
        <SubpageContent
          key={index}
          header={section.header}
          texts={section.texts}
        />
      ))}
    </section>
  );
}
