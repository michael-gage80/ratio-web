import type { Metadata } from "next";
import Legal from "@/components/pages/Legal";

export const metadata: Metadata = { title: "Terms (draft)", robots: { index: false } };

export default function Terms() {
  return (
    <Legal
      title="Terms of service"
      sections={[
        ["Educational, not legal advice", "Ratio is a learning tool. Nothing in the app or on this site is legal advice."],
        ["Who can use Ratio", "[18 and over only. Account rules and acceptable use.]"],
        ["Subscriptions", "[Ratio Plus billing through the App Store; university licences invoiced separately.]"],
        ["Content and accuracy", "[How lessons are reviewed, the ‘law stated as at’ date and how to report an error.]"],
        ["Friend lobbies and chat", "[Moderation policy, reporting and blocking, retention of reported messages.]"],
        ["Changes and contact", "[How these terms change and how to reach us.]"],
      ]}
    />
  );
}
