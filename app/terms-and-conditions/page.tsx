import { SubpageContent, SubpageHeader } from "@/components";

export default function TermsAndConditions() {
  const termsAndConditionsData = {
    sections: [
      {
        header: "Terms and Conditions",
        texts: [
          "Last Updated: Oct 24, 2024",
          "Welcome to Monks Pay, a mobile app and website service for seamless money transfers. By using Monks Pay, you agree to these Terms and Conditions. Please read them carefully before using our services.",
        ],
      },
      {
        header: "1. Acceptance of Terms",
        texts: [
          "By creating an account or accessing Monks Pay, you accept these Terms and Conditions, our Privacy Policy, and any additional terms we may provide. If you do not agree to these terms, please do not use our services.",
        ],
      },
      {
        header: "2. User Accounts",
        texts: [
          "To use Monks Pay, you must create an account by providing accurate and up-to-date personal information. You are responsible for maintaining the confidentiality of your account credentials and are liable for all activities conducted through your account. Notify us immediately if you suspect unauthorized access or security breaches.",
        ],
      },
      {
        header: "3. Use of Services",
        texts: [
          "Monks Pay is designed for personal money transfer services. You agree to use the platform only for lawful purposes and in compliance with applicable laws and regulations. You may not use Monks Pay for fraudulent activities, illegal transactions, or to violate the rights of others.",
        ],
      },
      {
        header: "4. Transaction Limits and Fees",
        texts: [
          "We may impose limits on the amount of money you can send or receive using Monks Pay. You will be notified of any fees associated with transactions before completing them. Monks Pay is committed to transparency, and we do not impose hidden fees. However, third-party charges such as those from banks or payment processors may apply.",
        ],
      },
      {
        header: "5. Security and Fraud Prevention",
        texts: [
          "Monks Pay takes security seriously and implements measures to protect your data. You agree to cooperate with any security-related requests, including verification processes to prevent fraud. Any attempt to bypass or compromise Monks Pay’s security measures is strictly prohibited.",
        ],
      },
      {
        header: "6. Payment Disputes",
        texts: [
          "If you encounter a transaction error or dispute, contact Monks Pay Customer Support within [Insert Timeframe]. We will work with you and other parties involved to resolve the issue. However, Monks Pay is not responsible for disputes between users or with third parties such as banks.",
        ],
      },
      {
        header: "7. Account Suspension or Termination",
        texts: [
          "Monks Pay reserves the right to suspend or terminate your account at our discretion for reasons including, but not limited to, violation of these Terms and Conditions, illegal activity, or security concerns. You may also terminate your account at any time by contacting our support team.",
        ],
      },
      {
        header: "8. Changes to the Terms",
        texts: [
          "Monks Pay reserves the right to update or modify these Terms and Conditions at any time. We will notify you of significant changes through email or within the app. Continued use of Monks Pay after changes are made indicates your acceptance of the revised terms.",
        ],
      },
      {
        header: "9. Governing Law",
        texts: [
          "These Terms and Conditions are governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any disputes or legal claims related to these terms will be handled within the jurisdiction of ect.",
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
    <section id="termsAndConditions" className="container mx-auto px-5 mt-5">
      <SubpageHeader title="Terms and Conditions" />
      {termsAndConditionsData.sections.map((section, index) => (
        <SubpageContent
          key={index}
          header={section.header}
          texts={section.texts}
        />
      ))}
    </section>
  );
}
