import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Privacy Policy - The Artisan Kiln" };

const PARAS = [
  "We collect only what we need to fulfil your order: your name, contact details and shipping address.",
  "Payment details are handled by our payment processor and are never stored on our servers.",
  "We do not sell or share your information with third parties, except the carriers required to deliver your tiles.",
  "You can ask us to delete your details at any time by getting in touch through the contact page.",
];

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageTitle eyebrow="Legal" title="Privacy Policy" />
      <div className="mx-auto max-w-2xl space-y-4 text-[15px] leading-relaxed text-ink/90">
        {PARAS.map((p, i) => (
          <Reveal key={i} delay={0.05 + i * 0.05} as="div">
            <p>{p}</p>
          </Reveal>
        ))}
      </div>
    </SiteShell>
  );
}
