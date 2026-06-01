import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageTitle from "@/components/PageTitle";
import FaqList, { type Faq } from "@/components/FaqList";

export const metadata: Metadata = { title: "FAQ - The Artisan Kiln" };

const FAQS: Faq[] = [
  { q: "How are tiles priced?", a: "Every pattern is sold by the square foot. Set the quantity in the cart and totals update live." },
  { q: "What about shipping?", a: "Shipping is a flat $25.00. Orders over $500 ship free." },
  { q: "Can I mix patterns?", a: "Yes. Use the design tool to drop tiles onto a 6x6 grid and preview your own layout." },
  { q: "How long does an order take?", a: "Tiles are fired to match your order. Most ship within two weeks." },
  { q: "Which payments do you accept?", a: "Credit and debit cards, PayPal, Apple Pay, and bank transfer." },
];

export default function FaqPage() {
  return (
    <SiteShell>
      <PageTitle eyebrow="Good to Know" title="FAQ" />
      <FaqList faqs={FAQS} />
    </SiteShell>
  );
}
