import type { Metadata } from "next";
import { legal } from "@/lib/legal";
import { pageMeta } from "@/lib/site";
import { LegalDoc, Sec, LTable, V, Who } from "@/components/legal/LegalDoc";
import ComplaintForm from "@/components/legal/ComplaintForm";
import { TLink } from "@/components/motion/Transition";

export const metadata: Metadata = {
  ...pageMeta(
    "Privacy notice",
    "How Ratio collects, uses and protects your personal data, and the rights you have under UK data protection law.",
    "/privacy",
    "/og/home.png",
  ),
  robots: legal.ready ? undefined : { index: false, follow: true },
};

const toc = [
  { id: "who", title: "Who we are" },
  { id: "scope", title: "What this notice covers" },
  { id: "collect", title: "What we collect" },
  { id: "use", title: "How we use it, and our lawful bases" },
  { id: "profile", title: "Your learning profile" },
  { id: "others", title: "What other people can see" },
  { id: "safety", title: "Chat, photos and safety" },
  { id: "universities", title: "Universities" },
  { id: "analytics", title: "Crash reports, analytics and cookies" },
  { id: "share", title: "Who we share it with" },
  { id: "transfers", title: "Where your data is stored" },
  { id: "retention", title: "How long we keep it" },
  { id: "age", title: "Age: Ratio is for adults" },
  { id: "security", title: "Keeping it secure" },
  { id: "rights", title: "Your rights" },
  { id: "complaints", title: "Complaints" },
  { id: "changes", title: "Changes to this notice" },
];

export default function Privacy() {
  return (
    <LegalDoc
      eyebrow="Privacy notice"
      title={
        <>
          Your data, <em className="ox">in plain English.</em>
        </>
      }
      version={legal.privacyVersion}
      toc={toc}
      summary={
        <ul className="ldoc-points">
          <li>We collect what we need to teach you, build your study plan and run duels. We do not sell your data or show adverts.</li>
          <li>We estimate what you know from your answers. That estimate shapes what you study next. It never decides anything about you outside Ratio.</li>
          <li>Your name (first name and initial), university, duel rating and wins are visible to other students. Everything else about your learning is private.</li>
          <li>Your university only sees your individual results if you switch that on. You can switch it off at any time.</li>
          <li>Usage analytics are off unless you choose to turn them on. Crash reports are always on so we can fix the app.</li>
          <li>You can download or delete your data from Settings in the app, at any time, for free.</li>
        </ul>
      }
    >
      <Sec id="who" n={1} title="Who we are">
        <p>
          Ratio is provided by <Who />. We are the <strong>controller</strong> of your personal data, which means we decide
          how and why it is used and we are responsible for protecting it.
        </p>
        <p>
          Contact us about privacy at <V k="privacyEmail" link="mail" />, or write to us at <V k="postalAddress" />. We are
          registered with the Information Commissioner’s Office (ICO) under registration number <V k="icoRegistration" />.
          Because we are a small organisation we have not appointed a data protection officer. The founder is responsible
          for data protection and reads every privacy message.
        </p>
      </Sec>

      <Sec id="scope" n={2} title="What this notice covers">
        <p>
          This notice covers the Ratio app for iPhone (“the app”), this website, and any emails or messages you exchange
          with us. It applies to students who use Ratio, to people who write to us (including prospective ambassadors and
          university staff) and to visitors to this website.
        </p>
        <p>
          If your university has given you a Ratio licence, this notice still applies to you. Your university does not
          control your Ratio account. See <a href="#universities" className="link-u ox">Universities</a> for what it can
          and cannot see.
        </p>
      </Sec>

      <Sec id="collect" n={3} title="What we collect">
        <p>We only collect the information in the table below. We do not ask for your full date of birth, your address, your phone number or any payment card details.</p>
        <LTable
          head={["Type", "What it includes", "Where it comes from"]}
          rows={[
            [
              "Account",
              "Email address, a securely hashed password (if you use one), and the identifiers Apple or Google give us if you sign in with them. Whether your email is verified.",
              "You, Apple or Google",
            ],
            [
              "Profile",
              "First name and optional surname initial, optional profile photo, year of birth (not your full date of birth), programme (LLB or SQE1), university and year of study, the modules you take, your planned SQE1 sitting, and any courses you’ve asked to hear about when they launch (GDL, SQE, BPTC).",
              "You",
            ],
            [
              "Study settings",
              "Weekly target, exam-pause weeks, study hours, quiet hours, notification times and your home screen layout. Accessibility choices such as dyslexia-friendly type and reduced motion stay on your phone and are not sent to us.",
              "You",
            ],
            [
              "Learning activity",
              "Your answers, whether they were right, how long they took, lessons and parts completed, test attempts, the days you were active, your review schedule, and the skill estimates and daily briefs we calculate from these.",
              "Your use of the app, and our calculations",
            ],
            [
              "Duels",
              "Matches, rounds, scores, duel ratings, wins on the boards, challenges you send or receive, students you have duelled or blocked, whether you chose extended time, and today’s duel count on the free plan.",
              "Your use of the app",
            ],
            [
              "Friend-lobby chat",
              "Messages you send in private friend lobbies, and whether our filter blocked a message.",
              "You",
            ],
            [
              "Reports",
              "Error reports about lessons (the item, a reason and an optional note), and reports you make about other users, their messages or photos.",
              "You",
            ],
            [
              "Subscription",
              "Which plan you have, when it renews or ends, and the transaction identifiers Apple gives us to confirm your purchase. Apple handles payment. We never see your card details.",
              "Apple",
            ],
            [
              "University licence",
              "The licence code you enter, and your university email address so we can check it matches the university’s domain.",
              "You",
            ],
            [
              "Device and app",
              "App version, iOS version, device model, a notification token if you allow notifications, and technical identifiers used for security and to keep the app working.",
              "Your phone",
            ],
            [
              "Crash reports",
              "What the app was doing when it crashed, device model, iOS and app version, and a random installation identifier.",
              "Your phone",
            ],
            [
              "Usage analytics (only if you opt in)",
              "Which screens and features you use, a random app-instance identifier, device type, and an approximate country or region based on your IP address.",
              "Your phone",
            ],
            [
              "Messages to us",
              "What you tell us when you email us, fill in a form on this website or ask for help, including your name, email address, and (for ambassadors or universities) your law school, year or role.",
              "You",
            ],
            [
              "Website",
              "Our hosting provider records standard technical logs (such as IP address, browser and pages requested) to deliver and protect the site. If we switch on website analytics, they are cookie-free and only produce aggregate counts.",
              "Your browser",
            ],
          ]}
        />
        <p>
          <strong>Sensitive information.</strong> We don’t ask for information about your health, ethnicity, religion,
          sexuality or other special categories of data. Please don’t share it in chat. Choosing extra duel time or
          dyslexia-friendly type does not require you to tell us why. We don’t treat those choices as information about
          your health and we use them only to provide the feature.
        </p>
      </Sec>

      <Sec id="use" n={4} title="How we use it, and our lawful bases">
        <p>UK data protection law requires a lawful basis for each thing we do with your data. Ours are:</p>
        <LTable
          head={["What we do", "Lawful basis"]}
          rows={[
            [
              "Create and run your account; deliver lessons, tests, reviews and your daily brief; keep your progress in sync; run duels, ratings, boards, challenges and friend lobbies; provide Ratio Plus or your university licence",
              "Contract: we need it to provide the service you signed up for",
            ],
            [
              "Build your learning profile and choose what you study next (see section 5)",
              "Contract: personalised study is the core of the service",
            ],
            [
              "Check you are 18 or over",
              "Legitimate interests (keeping children off a service designed for adults) and legal obligation (online safety law)",
            ],
            [
              "Filter chat, check profile photos, act on reports, block users and keep records of moderation decisions",
              "Legal obligation (Online Safety Act 2023) and legitimate interests (keeping students safe)",
            ],
            [
              "Send account, security and service messages, such as email verification and changes to these terms",
              "Contract",
            ],
            [
              "Send push notifications you have switched on, such as your daily brief and duel challenges",
              "Consent, which you give or withdraw in iOS and in Ratio’s settings",
            ],
            [
              "Email you when a course you asked about (GDL, SQE or BPTC) launches",
              "Consent, which you can withdraw at any time",
            ],
            [
              "Share your individual results with your university",
              "Consent, which you give with a switch in Settings and can withdraw at any time",
            ],
            [
              "Collect crash reports",
              "Legitimate interests (finding and fixing faults so the app works)",
            ],
            [
              "Collect usage analytics",
              "Consent (off unless you switch it on)",
            ],
            [
              "Improve lessons and measure whether Ratio helps people learn, using learning data that has been pseudonymised (with names and contact details removed)",
              "Legitimate interests (making a better and more honest product). You can object (see section 15)",
            ],
            [
              "Fix errors in lessons that you report",
              "Legitimate interests",
            ],
            [
              "Reply to messages, enquiries and complaints",
              "Legitimate interests; contract where it concerns your account",
            ],
            [
              "Keep records of purchases, meet tax and accounting rules, respond to lawful requests, and establish or defend legal claims",
              "Legal obligation and legitimate interests",
            ],
            [
              "Help to prevent crime, or protect someone at risk of harm",
              "Recognised legitimate interests under UK data protection law (such as safeguarding and crime prevention), or legal obligation",
            ],
          ]}
        />
        <p>
          Where we rely on legitimate interests, we have weighed our interests against yours and concluded they are not
          overridden. You can ask us for details of that assessment. We do not use your data for advertising, we do not
          sell it and we do not let anyone else use it for their own marketing.
        </p>
      </Sec>

      <Sec id="profile" n={5} title="Your learning profile">
        <p>
          Every question in Ratio is tagged to one of three skills: knowledge, understanding and application. Each time you
          answer, a scoring model updates our estimate of each skill for that topic. The estimate comes with an uncertainty
          band, which starts wide and narrows as you answer more. From these estimates we:
        </p>
        <ul>
          <li>build your daily brief, weighted towards your growth edge;</li>
          <li>schedule when each item comes back for review;</li>
          <li>suggest a plain-English summary of your profile, such as “The Recogniser”, always shown as a hypothesis;</li>
          <li>match you with duel opponents of a similar rating in the module you choose.</li>
        </ul>
        <p>
          This is profiling, and it is done automatically. It shapes what Ratio suggests you study. It does not produce
          decisions with legal or similarly significant effects on you. It is not used for grades, admissions, employment
          or anything outside Ratio, and we do not share it with your university unless you switch that on. You can always
          ignore a suggestion and study any lesson you have access to.
        </p>
        <p>
          If you think an estimate is wrong or unfair, tell us and a person will look at it. You can reset your progress in
          Settings, which clears your scores and review schedule and starts your profile again.
        </p>
      </Sec>

      <Sec id="others" n={6} title="What other people can see">
        <p>Duels and boards are social, so some information is visible to other signed-in students:</p>
        <ul>
          <li>your first name and surname initial (for example “Zara K.”) and your profile photo, if you add one;</li>
          <li>your university, your duel rating in each module and your wins on the boards;</li>
          <li>your results in matches you play against them;</li>
          <li>messages you send in a friend lobby, which only the people in that lobby can see.</li>
        </ul>
        <p>
          Your email, year of birth, learning profile, answers and study habits are never shown to other students. If you
          delete your account, your name in other students’ match histories is replaced with “Deleted student”.
        </p>
      </Sec>

      <Sec id="safety" n={7} title="Chat, photos and safety">
        <p>
          Free-text chat exists only in private friend lobbies, which close after 15 minutes. Before a message is
          delivered, an automated filter checks it for contact details (such as phone numbers, emails, links and social
          handles) and for abusive language. If it matches, the message is not delivered and you see “Message not sent”.
          Delivered messages are kept for 30 days so we can investigate reports, and are then deleted automatically.
        </p>
        <p>
          If you upload a profile photo, it is checked automatically with Google Cloud Vision’s SafeSearch before anyone
          else can see it. Google processes the image to check it and does not keep it. A photo that fails the check is
          deleted straight away and your initial is shown instead.
        </p>
        <p>
          When you report a user, message or photo, we review the report, the content and relevant records, and we may
          warn, suspend or remove an account. The <TLink href="/terms#community" className="link-u ox">terms of service</TLink>{" "}
          explain how this works and how to appeal. If we find content that suggests someone is at risk, or child sexual
          abuse material, we may share information with the police or, where the law requires, report it to the National
          Crime Agency.
        </p>
      </Sec>

      <Sec id="universities" n={8} title="Universities">
        <p>
          <strong>Licences.</strong> If your university buys Ratio licences, you activate one with a code and your
          university email address. We use that email only to check it matches your university’s domain. We record that a
          seat was used and by which email address, and we tell your university how many seats have been used.
        </p>
        <p>
          <strong>Your individual results</strong> are shared with your university only if you switch on “Share my progress
          with my university” in Settings. You can switch it off at any time. We will then stop sharing from that point, but we
          cannot recall information already shared.
        </p>
        <p>
          <strong>Cohort statistics.</strong> We may give a university aggregate statistics about its students, for
          example how a cohort is doing on a topic. We only do this for groups of at least ten students and in a form that
          does not identify anyone.
        </p>
      </Sec>

      <Sec id="analytics" n={9} title="Crash reports, analytics and cookies">
        <p>
          <strong>In the app.</strong> We use Firebase Crashlytics for crash reports, which are always on. We use Google
          Analytics for Firebase for usage analytics only if you opt in, either when the app asks you or later in Settings.
          You can switch analytics off at any time and collection stops. We have set these tools so that Google does not
          use the data for advertising, and we do not link analytics to your name or email.
        </p>
        <p>
          <strong>On this website.</strong> This site does not set cookies. It saves your light or dark theme choice in your
          browser’s local storage, because you asked it to. It sends nothing to us. If we switch on Vercel Web Analytics,
          it does not use cookies and only produces aggregate counts of page views.
        </p>
      </Sec>

      <Sec id="share" n={10} title="Who we share it with">
        <p>
          We use trusted service providers who process data on our behalf, under contracts that require them to protect it
          and use it only on our instructions:
        </p>
        <LTable
          head={["Provider", "What they do for us"]}
          rows={[
            [
              "Google (Firebase and Google Cloud)",
              "Sign-in, database, storage, server functions, push notifications, remote configuration, crash reports, optional analytics, photo checks (Cloud Vision) and data analysis",
            ],
            ["Apple", "App distribution, subscriptions and payments, Sign in with Apple and push notification delivery"],
            ["Google Sign-In", "Signing in with a Google account, if you choose to"],
            ["Vercel", "Hosting this website"],
            [<V key="ep" k="emailProvider" />, "Our email inboxes"],
          ]}
        />
        <p>We also share information:</p>
        <ul>
          <li>with other students, as described in section 6;</li>
          <li>with your university, only as described in section 8;</li>
          <li>
            with professional advisers such as lawyers and accountants, and with the police, regulators (including the ICO
            and Ofcom) or courts, where the law requires it or where it is needed to protect someone’s safety;
          </li>
          <li>
            with a buyer or investor if Ratio or its business is sold or restructured, who would have to protect it in
            the same way.
          </li>
        </ul>
        <p>
          Apple and Google also have their own relationship with you when you use their stores, accounts and devices.
          Their privacy policies apply to that.
        </p>
        <p>
          The qualified lawyers who review our lessons see lesson content and anonymous error reports, not your account.
        </p>
      </Sec>

      <Sec id="transfers" n={11} title="Where your data is stored">
        <p>
          Our main database, server functions and file storage run in Google Cloud’s London region. Live duels use a
          database in Google’s Belgium region, which the UK recognises as providing adequate protection.
        </p>
        <p>
          Some services process data outside the UK, mainly in the United States: Firebase Authentication (sign-in),
          Crashlytics, Google Analytics for Firebase, Cloud Vision photo checks and our website host. When data leaves the
          UK we rely on UK adequacy regulations (including the UK Extension to the EU–US Data Privacy Framework, where the
          recipient is certified under it) or on the UK International Data Transfer Agreement or Addendum. You can ask us
          for more details.
        </p>
      </Sec>

      <Sec id="retention" n={12} title="How long we keep it">
        <LTable
          head={["Data", "How long"]}
          rows={[
            [
              "Account, profile, learning activity and duel history",
              "While your account is open. If you delete your account we delete this straight away, apart from copies in backups, which are overwritten within 30 days. We may delete accounts that have not been used for more than two years, after warning you by email.",
            ],
            ["Friend-lobby messages", "30 days, then deleted automatically"],
            ["Profile photos that fail the safety check", "Deleted straight away"],
            [
              "Reports and moderation records",
              "Until the report is resolved, then up to 12 months (longer if needed for a legal claim or a request from the police)",
            ],
            ["University licence seat records", "Until the licence ends, then up to 12 months"],
            [
              "Subscription and transaction records",
              "Up to six years after the transaction, for tax, accounting and legal claims",
            ],
            ["Crash reports", "90 days"],
            ["Usage analytics", "Up to 14 months"],
            ["Emails, enquiries and complaints", "Up to two years after the conversation ends"],
            ["Course waitlist (GDL, SQE, BPTC)", "Until that course launches and we have told you, or until you withdraw"],
            ["Pseudonymised learning data used to improve lessons", "Up to three years, then deleted or fully anonymised"],
          ]}
        />
        <p>
          Anonymous statistics that can no longer identify anyone are not personal data and we may keep them.
        </p>
      </Sec>

      <Sec id="age" n={13} title="Age: Ratio is for adults">
        <p>
          Ratio is only for people aged 18 or over. When you sign up we ask for your year of birth and check you are over
          18. We don’t store your full date of birth. If we learn that someone under 18 has an account, we will close it
          and delete their data. If you think a child is using Ratio, please tell us at <V k="safetyEmail" link="mail" />.
        </p>
      </Sec>

      <Sec id="security" n={14} title="Keeping it secure">
        <p>
          Data is encrypted in transit and at rest. Access is controlled by security rules so that each student can only
          read their own private data. Scores, ratings, boards and match results can only be written by our servers, not by
          the app. Only the people who need access to run Ratio have it, and they use strong authentication. No system is
          perfectly secure. If a breach puts your rights at high risk, we will tell you and the ICO as the law requires.
        </p>
      </Sec>

      <Sec id="rights" n={15} title="Your rights">
        <p>Under UK data protection law you have the right to:</p>
        <ul>
          <li>
            <strong>access</strong> your data. <em>Settings → Privacy and legal → Export my data</em> gives you a copy at any time;
          </li>
          <li>
            <strong>correct</strong> it. You can edit most of your profile in the app;
          </li>
          <li>
            <strong>delete</strong> it. <em>Settings → Danger zone → Delete account</em> deletes your account straight away;
          </li>
          <li>
            <strong>restrict</strong> how we use it, or <strong>object</strong> to uses based on legitimate interests;
          </li>
          <li>
            <strong>take it with you</strong> in a machine-readable format;
          </li>
          <li>
            <strong>withdraw consent</strong> at any time, for analytics, notifications, university sharing or course
            emails. This does not affect what we did before;
          </li>
          <li>
            ask a person to review, and <strong>challenge</strong>, any automated decision that has a significant effect on
            you. Ratio does not make such decisions, but the right still applies.
          </li>
        </ul>
        <p>
          To use any right, use the app or contact <V k="privacyEmail" link="mail" />. It’s free. We will reply within one
          month, or tell you within that month if we need up to two more months because the request is complex. We may ask
          you to confirm your identity, usually from the email address on your account.
        </p>
      </Sec>

      <Sec id="complaints" n={16} title="Complaints">
        <p>
          If you are unhappy with how we have handled your data, please complain to us first, using the form below or by
          email. We will acknowledge your complaint within 30 days, look into it properly, keep you updated and tell you the
          outcome.
        </p>
        <ComplaintForm initial="privacy" />
        <p>
          You also have the right to complain to the UK data protection regulator, the Information Commissioner’s Office
          (from 30 September 2026 the Information Commission, still known as the ICO), at{" "}
          <a className="link-u ox" href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">
            ico.org.uk/make-a-complaint
          </a>{" "}
          or on 0303 123 1113.
        </p>
      </Sec>

      <Sec id="changes" n={17} title="Changes to this notice">
        <p>
          We will update this notice when what we do with your data changes. If a change matters, we will tell you in the
          app or by email before it takes effect. The version number and date at the top show when it last changed.
        </p>
      </Sec>
    </LegalDoc>
  );
}
