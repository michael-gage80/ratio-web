import type { Metadata } from "next";
import { legal } from "@/lib/legal";
import { pageMeta } from "@/lib/site";
import { LegalDoc, Sec, V, Who } from "@/components/legal/LegalDoc";
import ComplaintForm from "@/components/legal/ComplaintForm";
import { TLink } from "@/components/motion/Transition";

export const metadata: Metadata = {
  ...pageMeta(
    "Terms of service",
    "The terms for using Ratio: eligibility, subscriptions, fair play, community rules, and your rights as a consumer.",
    "/terms",
    "/og/home.png",
  ),
  robots: legal.ready ? undefined : { index: false, follow: true },
};

const toc = [
  { id: "about", title: "About these terms" },
  { id: "not-advice", title: "Educational, not legal advice" },
  { id: "eligibility", title: "Who can use Ratio" },
  { id: "account", title: "Your account" },
  { id: "plans", title: "Free, Ratio Plus and university licences" },
  { id: "cancel", title: "Cancelling and refunds" },
  { id: "use", title: "Using Ratio fairly" },
  { id: "duels", title: "Duels, ratings and boards" },
  { id: "community", title: "Community rules and online safety" },
  { id: "reports", title: "Reports, complaints and appeals" },
  { id: "content", title: "Our content and yours" },
  { id: "changes", title: "Changes to Ratio and these terms" },
  { id: "ending", title: "Ending your use of Ratio" },
  { id: "liability", title: "Our responsibility to you" },
  { id: "apple", title: "If you downloaded Ratio from the App Store" },
  { id: "disputes", title: "Disputes and the law that applies" },
  { id: "general", title: "Other important terms" },
];

export default function Terms() {
  return (
    <LegalDoc
      eyebrow="Terms of service"
      title={
        <>
          The terms, <em className="ox">as a contract should be.</em>
        </>
      }
      version={legal.termsVersion}
      toc={toc}
      summary={
        <ul className="ldoc-points">
          <li>Ratio teaches law. It is not legal advice, and you shouldn’t rely on it for a real legal problem.</li>
          <li>You must be 18 or over. Keep your account to yourself.</li>
          <li>Ratio Plus is an Apple subscription that renews until you cancel it in your Apple account settings.</li>
          <li>Play fair in duels. No bots, scripts or shared answers. Sparring partners are always labelled.</li>
          <li>Be decent in friend-lobby chat. We filter messages, act on reports and explain how to appeal.</li>
          <li>Your legal rights as a consumer are not affected by anything in these terms.</li>
        </ul>
      }
    >
      <Sec id="about" n={1} title="About these terms">
        <p>
          These terms are a contract between you and <Who /> (“Ratio”, “we”, “us”). They apply when you use the Ratio app
          and this website. By creating an account you agree to them, so please read them. Our{" "}
          <TLink href="/privacy" className="link-u ox">privacy notice</TLink> explains how we use your personal data.
        </p>
        <p>
          You can contact us at <V k="supportEmail" link="mail" /> or by post at <V k="postalAddress" />. We will contact
          you by email or in the app.
        </p>
      </Sec>

      <Sec id="not-advice" n={2} title="Educational, not legal advice">
        <p className="lead-strong">
          Ratio is an educational tool. Nothing in the app or on this website is legal advice, and using Ratio does not
          create a lawyer–client relationship with us or with the lawyers who review our lessons.
        </p>
        <p>
          Our lessons are written to help you learn the law of England and Wales for study and exams. They simplify, they
          state the law as at the date shown on each lesson, and the law may have changed since. If you have a real legal
          problem, speak to a qualified solicitor or barrister, or a free advice service such as Citizens Advice.
        </p>
        <p>
          We work hard to get the law right. Lessons are reviewed by qualified lawyers before they are published, and each
          item has an error-report button. If you find a mistake, please report it and we aim to review it within 72 hours.
        </p>
      </Sec>

      <Sec id="eligibility" n={3} title="Who can use Ratio">
        <ul>
          <li>You must be 18 or over. If we find an account belongs to someone under 18, we will close it.</li>
          <li>
            Ratio is designed for students of the law of England and Wales. You may use it from elsewhere, but lessons do
            not cover the law of other places, including Scotland and Northern Ireland, unless they say so.
          </li>
          <li>You must not use Ratio if we have previously banned you.</li>
        </ul>
      </Sec>

      <Sec id="account" n={4} title="Your account">
        <ul>
          <li>Give us accurate information, including your year of birth.</li>
          <li>One account per person. Don’t share your account or let anyone else use it.</li>
          <li>
            Keep your sign-in details secure and tell us straight away at <V k="supportEmail" link="mail" /> if you think
            someone else has used your account.
          </li>
          <li>
            Your display name is your real first name and, optionally, your surname initial. Don’t impersonate anyone or
            use a name or photo that breaks the community rules.
          </li>
        </ul>
      </Sec>

      <Sec id="plans" n={5} title="Free, Ratio Plus and university licences">
        <p>
          <strong>Free.</strong> Ratio is free to download. The free plan includes one full module of your choice (which
          you can change once), headline profile scores, a daily allowance of duels, and the news centre and weekly quiz.
          We may change what the free plan includes. We will not remove accessibility features from it.
        </p>
        <p>
          <strong>Ratio Plus</strong> unlocks all modules, unlimited duels and your full profile. The price, what is
          included and the length of any free trial are shown in the app before you buy.
        </p>
        <ul>
          <li>
            Ratio Plus is sold through Apple’s App Store as a monthly or annual auto-renewing subscription. Apple takes
            payment and is the seller for the purchase, and Apple’s Media Services Terms also apply.
          </li>
          <li>
            Your subscription renews automatically at the end of each period, and Apple charges you, unless you cancel at
            least 24 hours before the period ends. If you have a free trial, you are charged when it ends unless you cancel
            before then.
          </li>
          <li>
            If we change the price, Apple will tell you in advance and, where Apple’s rules require it, ask you to agree.
            If you don’t want to pay the new price, you can cancel before it applies.
          </li>
          <li>Deleting the app or your Ratio account does not cancel an Apple subscription. You must cancel it with Apple.</li>
        </ul>
        <p>
          <strong>University licences.</strong> If your university has bought licences, you may be able to activate Ratio
          Plus with a licence code and a verified university email address. A licence lasts until the date shown in the app
          or until your university ends it, whichever is sooner. When it ends, your account moves to the free plan and your
          progress is kept. Your university is our customer for the licence. It does not see your individual results
          unless you choose to share them.
        </p>
      </Sec>

      <Sec id="cancel" n={6} title="Cancelling and refunds">
        <ul>
          <li>
            You can cancel Ratio Plus at any time in your Apple account settings (Settings → your name → Subscriptions).
            You keep Plus until the end of the period you have paid for.
          </li>
          <li>
            Because Apple sells the subscription, refunds are handled by Apple under its terms, including any right to
            cancel within 14 days that Apple gives you. You can ask Apple for a refund at reportaproblem.apple.com.
          </li>
          <li>
            If Ratio Plus is faulty or not as described, you have legal rights, explained in section 14. Contact us as well
            as Apple and we will try to put it right.
          </li>
        </ul>
      </Sec>

      <Sec id="use" n={7} title="Using Ratio fairly">
        <p>We give you a personal, non-transferable right to use Ratio for your own study. You must not:</p>
        <ul>
          <li>copy, record, scrape, republish or sell our lessons, questions or other content, or use them to train or build another product or AI model;</li>
          <li>share test or duel questions and answers in a way designed to let people pass without learning;</li>
          <li>use bots, scripts, automated tools or another person to answer for you;</li>
          <li>
            reverse-engineer, decompile or interfere with the app or our servers, except as far as the law allows you to,
            or try to get around security, age checks, usage limits or paid features;
          </li>
          <li>use Ratio for anything unlawful, or in a way that harms Ratio or other people.</li>
        </ul>
      </Sec>

      <Sec id="duels" n={8} title="Duels, ratings and boards">
        <ul>
          <li>
            Our servers decide every point. Speed is measured on your device and checked against our records, and we may
            reject results that look impossible.
          </li>
          <li>
            If you disconnect for too long you may forfeit a round or a match. We try to make this fair, but connection
            problems can happen and we can’t always tell whose connection failed.
          </li>
          <li>
            Sparring partners are computer opponents. They are always labelled, and wins against them never count on the
            boards.
          </li>
          <li>
            Extra-time duels are for anyone who finds the standard time a barrier. You don’t need to explain why. Extra-time
            players are only matched with each other.
          </li>
          <li>
            If we reasonably believe someone has cheated, we may cancel results, reset ratings, remove them from boards or
            suspend their account. You can appeal (see section 10).
          </li>
          <li>Ratings and boards are for fun and motivation. They are not a measure of legal ability and have no value outside Ratio.</li>
        </ul>
      </Sec>

      <Sec id="community" n={9} title="Community rules and online safety">
        <p>
          Ratio lets students message each other in private friend lobbies and see each other’s names and photos. This
          section sets out what is not allowed and how we protect users, as the Online Safety Act 2023 requires.
        </p>
        <p>
          <strong>You must not post, send or upload anything that:</strong>
        </p>
        <ul>
          <li>is illegal, including terrorist content, child sexual abuse material, intimate images shared without consent, threats, harassment, stalking, hate crime, fraud or the sale of illegal items;</li>
          <li>bullies, abuses, threatens or demeans anyone, including because of race, religion, sex, sexual orientation, gender identity, disability or age;</li>
          <li>is sexual, violent or graphic;</li>
          <li>shares anyone’s contact details, including your own, or tries to move someone off Ratio;</li>
          <li>impersonates someone, spams, advertises or links to other sites;</li>
          <li>infringes someone else’s rights, such as their copyright or privacy.</li>
        </ul>
        <p>
          <strong>How we protect users.</strong>
        </p>
        <ul>
          <li>
            <strong>Chat is limited by design.</strong> It exists only in private friend lobbies that you join with a code,
            which close after 15 minutes. There is no public chat and no messaging strangers.
          </li>
          <li>
            <strong>Automated checks.</strong> Before any message is delivered, software checks it against patterns for
            contact details and links and against a list of abusive words, including disguised spellings. A matching
            message is not delivered. Before a profile photo can be seen, Google Cloud Vision checks it for adult, violent
            and sexually suggestive content. A photo that fails is deleted. These checks run on every message and photo,
            and they are not perfect: they can miss things and occasionally block something innocent.
          </li>
          <li>
            <strong>Terrorist content, child sexual abuse material and intimate image abuse.</strong> We treat these as the
            most serious. Our filters block links and contact details that are often used to share them, and our photo
            checks screen for sexual and violent imagery. We remove this content as soon as we become aware of it, ban the
            account, preserve the evidence and, for child sexual abuse material, report it to the National Crime Agency.
            Reports of intimate images shared without consent are dealt with first.
          </li>
          <li>
            <strong>Blocking.</strong> You can block another student at any time. You won’t be matched with them or receive
            their challenges.
          </li>
          <li>
            <strong>What we do when rules are broken.</strong> Depending on how serious it is, we may remove content, give a
            warning, restrict features such as chat or photos, suspend an account, or ban it permanently. We may also report
            to the police. We apply these rules consistently.
          </li>
        </ul>
      </Sec>

      <Sec id="reports" n={10} title="Reports, complaints and appeals">
        <ul>
          <li>
            <strong>Report content or a user</strong> using the report option in the app, or the form below. You don’t need
            an account to report illegal content you have seen on Ratio.
          </li>
          <li>
            A person reviews reports. We aim to act on reports of illegal content, and of intimate images, within 24 hours,
            and on other reports within 72 hours. We will tell you what we did, unless that would put someone at risk.
          </li>
          <li>
            <strong>Appeals.</strong> If we remove your content, restrict your account, suspend or ban you, we will tell you
            why unless the law or someone’s safety prevents it. You can appeal within 30 days. Someone who wasn’t involved
            in the original decision will review it and tell you the outcome, and we will restore content or access if we
            got it wrong.
          </li>
          <li>
            <strong>Complaints</strong> about how we handle reports, how our automated checks work, or anything else in
            these terms can be made using the form below or by emailing <V k="safetyEmail" link="mail" />. We will
            acknowledge them and tell you the outcome.
          </li>
        </ul>
        <ComplaintForm initial="safety" />
      </Sec>

      <Sec id="content" n={11} title="Our content and yours">
        <p>
          <strong>Ours.</strong> Ratio’s lessons, questions, explanations, diagrams, design and software belong to us or
          to people who have licensed them to us. Legislation is reproduced under the Open Government Licence. Judgments
          are summarised and cited, not reproduced. News headlines link to the original publisher, whose terms apply to
          their site.
        </p>
        <p>
          <strong>Yours.</strong> You own what you create on Ratio, such as your messages, photo and reports. You give us a
          non-exclusive, royalty-free licence to store, display, check and moderate it, only so we can run Ratio and keep
          it safe. The licence ends when the content is deleted, except where we need to keep it as set out in the privacy
          notice. If you send us suggestions or corrections, we may use them freely to improve Ratio.
        </p>
      </Sec>

      <Sec id="changes" n={12} title="Changes to Ratio and these terms">
        <ul>
          <li>
            We are always improving Ratio. We may change, add or remove lessons and features, including to reflect changes
            in the law. If a change means you lose a significant part of something you have paid for, we will tell you and
            you may cancel and we will refund, or arrange a refund of, the unused part.
          </li>
          <li>
            We may update these terms to reflect changes in the law, in Ratio or in how we run it. We will tell you about
            important changes at least 30 days before they apply. If you don’t agree, you can stop using Ratio and delete
            your account before the change takes effect.
          </li>
          <li>
            Ratio needs a recent version of iOS. Some features, including duels and news, need an internet connection. We
            can’t promise Ratio will always be available or free of faults, but we will try to fix problems quickly.
          </li>
        </ul>
      </Sec>

      <Sec id="ending" n={13} title="Ending your use of Ratio">
        <ul>
          <li>
            You can stop at any time and delete your account in Settings. Remember to cancel any Apple subscription
            separately.
          </li>
          <li>
            We may suspend or close your account if you seriously or repeatedly break these terms, if the law requires it,
            or if we reasonably believe you are under 18. Unless there is a safety or legal reason not to, we will tell you
            why and how to appeal. If we close your account without a good reason while you have a paid subscription, we
            will refund, or arrange a refund of, the unused part.
          </li>
          <li>If we ever stop offering Ratio, we will give you reasonable notice and refund, or arrange a refund of, any unused paid period.</li>
        </ul>
      </Sec>

      <Sec id="liability" n={14} title="Our responsibility to you">
        <p>
          <strong>Your legal rights.</strong> If you are a consumer, you have legal rights in relation to digital content
          and services that are faulty or not as described, including under the Consumer Rights Act 2015. Nothing in these
          terms affects those rights. Advice about your rights is available from Citizens Advice.
        </p>
        <ul>
          <li>
            We are responsible for loss or damage you suffer that is a foreseeable result of our breaking these terms or
            failing to use reasonable care and skill.
          </li>
          <li>
            If digital content we supply damages your device or other digital content, and this is because we did not use
            reasonable care and skill, we will repair the damage or compensate you.
          </li>
          <li>
            We do not exclude or limit our liability where it would be unlawful to do so, including for death or personal
            injury caused by our negligence, or for fraud.
          </li>
          <li>
            Ratio is for private, educational use. We are not responsible for business losses, or for decisions you make
            about a real legal matter based on Ratio, which is not legal advice (see section 2).
          </li>
          <li>
            We are not responsible for delays or failures caused by events outside our reasonable control, such as a
            failure of Apple’s or Google’s services. We will tell you and try to limit the effect.
          </li>
        </ul>
      </Sec>

      <Sec id="apple" n={15} title="If you downloaded Ratio from the App Store">
        <p>These terms, rather than Apple’s standard licence agreement, govern your use of the app. You and we agree that:</p>
        <ul>
          <li>these terms are between you and us only, not Apple, and we, not Apple, are responsible for the app and its content;</li>
          <li>your licence to use the app is limited to Apple-branded devices you own or control, as allowed by Apple’s Usage Rules;</li>
          <li>Apple has no obligation to provide maintenance or support for the app. Contact us at <V k="supportEmail" link="mail" />;</li>
          <li>
            if the app fails to meet any applicable warranty, you may tell Apple and Apple will refund the purchase price
            (if any). To the extent the law allows, Apple has no other warranty obligation for the app;
          </li>
          <li>
            we, not Apple, are responsible for dealing with any claims about the app, including product liability claims,
            claims that it fails to meet legal or regulatory requirements, consumer protection or privacy claims, and
            claims that it infringes someone else’s intellectual property;
          </li>
          <li>
            you confirm you are not located in a country subject to a UK or US government embargo, and are not on any UK or
            US list of prohibited or restricted parties;
          </li>
          <li>you must comply with any third-party terms that apply when you use the app, such as your mobile network’s;</li>
          <li>Apple and its subsidiaries may enforce these terms against you as third-party beneficiaries.</li>
        </ul>
      </Sec>

      <Sec id="disputes" n={16} title="Disputes and the law that applies">
        <ul>
          <li>
            If you have a problem, please contact us first at <V k="supportEmail" link="mail" />. Most things can be sorted
            out quickly.
          </li>
          <li>
            These terms are governed by the law of England and Wales. You can bring proceedings in the courts of England
            and Wales. If you live in Scotland or Northern Ireland, you can also bring proceedings in your local courts, and
            the mandatory consumer protections of the place where you live still apply.
          </li>
        </ul>
      </Sec>

      <Sec id="general" n={17} title="Other important terms">
        <ul>
          <li>
            We may transfer our rights and obligations under these terms to another organisation, for example if Ratio is
            sold. We will tell you, and this will not reduce your rights. You may not transfer your account.
          </li>
          <li>
            Apart from Apple (section 15), nobody else has any rights under these terms, including under the Contracts
            (Rights of Third Parties) Act 1999.
          </li>
          <li>If a court decides part of these terms can’t be enforced, the rest still applies.</li>
          <li>If we don’t enforce a right straight away, we can still enforce it later.</li>
        </ul>
      </Sec>
    </LegalDoc>
  );
}
