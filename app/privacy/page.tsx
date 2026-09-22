import type { Metadata } from "next";
import Legal from "@/components/pages/Legal";

export const metadata: Metadata = { title: "Privacy (draft)", robots: { index: false } };

export default function Privacy() {
  return (
    <Legal
      title="Privacy notice"
      sections={[
        ["This website", "The forms on this site open your own email app; nothing you type is stored by the site. If analytics are switched on, they use Vercel Web Analytics, which does not use cookies."],
        ["Who we are", "[Controller name, address and contact details to be confirmed.]"],
        ["What the app will collect", "[Account details, learning data and profile scores, duel results, and optional university sharing, each with its lawful basis under UK GDPR.]"],
        ["Profiling, in plain English", "[How the knowledge, understanding and application scores are estimated, and how they decide what you study next.]"],
        ["Where data is held", "[Google Cloud / Firebase, London region wherever available; full list of processors.]"],
        ["Your rights", "[Access, export, correction and in-app deletion; how to complain to the ICO.]"],
      ]}
    />
  );
}
