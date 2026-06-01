"use client";

import { useMemo, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store/hooks";
import { calcShipping, calcSubtotal, formatUSD } from "@/lib/pricing";
import {
  ApplePayMark,
  BankMark,
  CreditCardIcon,
  MastercardMark,
  PaypalMark,
  VisaMark,
} from "./icons";

type PaymentMethod = "card" | "paypal" | "apple" | "bank";

interface FormState {
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
  cardNumber: string;
  expiration: string;
  cvv: string;
}

const EMPTY: FormState = {
  name: "", phone: "", email: "", address: "", notes: "",
  cardNumber: "", expiration: "", cvv: "",
};

const METHODS: { id: PaymentMethod; label: string; icon: React.ReactNode }[] = [
  { id: "card", label: "Credit / Debit Card", icon: <CreditCardIcon className="h-5 w-auto" /> },
  { id: "paypal", label: "PayPal", icon: <PaypalMark className="h-5 w-auto" /> },
  { id: "apple", label: "Apple Pay", icon: <ApplePayMark className="h-5 w-auto" /> },
  { id: "bank", label: "Bank Transfer", icon: <BankMark className="h-5 w-auto" /> },
];

export default function Checkout() {
  const lines = useAppSelector((s) => s.cart.lines);
  const subtotal = useMemo(() => calcSubtotal(lines), [lines]);
  const shipping = calcShipping(subtotal);
  const grandTotal = subtotal + shipping;

  const [method, setMethod] = useState<PaymentMethod>("card");
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [placed, setPlaced] = useState(false);

  const set =
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "required";
    if (!form.email.trim()) next.email = "required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "invalid";
    if (!form.address.trim()) next.address = "required";
    if (method === "card") {
      const digits = form.cardNumber.replace(/\s/g, "");
      if (!digits) next.cardNumber = "required";
      else if (!/^\d{16}$/.test(digits) || !luhn(digits)) next.cardNumber = "invalid card";
      if (!/^\d{2}\/\d{2}$/.test(form.expiration)) next.expiration = "MM/YY";
      if (!/^\d{3,4}$/.test(form.cvv)) next.cvv = "3-4 digits";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (lines.length === 0) {
      setErrors({ address: "cart is empty" });
      return;
    }
    if (validate()) setPlaced(true);
  }

  if (placed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-2 border-line bg-cream/60 p-6 text-center shadow-card-sm"
      >
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border-2 border-line bg-kiln-sage text-cream">
          ✓
        </div>
        <h3 className="font-display text-2xl font-extrabold">Order placed</h3>
        <p className="mt-2 text-sm text-ink/80">
          Thank you, {form.name || "friend"}. A confirmation will be sent to{" "}
          {form.email || "your email"}. Grand total{" "}
          <strong className="tabular-nums">{formatUSD(grandTotal)}</strong>.
        </p>
        <button
          type="button"
          className="btn-pill mt-5"
          onClick={() => {
            setPlaced(false);
            setForm(EMPTY);
          }}
        >
          New order
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="space-y-3">
        <ULineField label="Customer Name" error={errors.name}>
          <input className="uline" value={form.name} onChange={set("name")} />
        </ULineField>
        <div className="flex flex-wrap gap-x-4 gap-y-3">
          <ULineField label="Phone" error={errors.phone} className="min-w-[120px] flex-1">
            <input className="uline" value={form.phone} onChange={set("phone")} />
          </ULineField>
          <ULineField label="Email" error={errors.email} className="min-w-[120px] flex-1">
            <input className="uline" type="email" value={form.email} onChange={set("email")} />
          </ULineField>
        </div>
        <ULineField label="Shipping Address" error={errors.address}>
          <input className="uline" value={form.address} onChange={set("address")} />
        </ULineField>
        <ULineField label="Project Notes">
          <input className="uline" value={form.notes} onChange={set("notes")} />
        </ULineField>
      </div>

      <dl className="space-y-1.5 border-y-2 border-line/40 py-3 text-sm">
        <SumRow label="Subtotal" value={formatUSD(subtotal)} />
        <SumRow label="Shipping" value={shipping === 0 ? "$0.00" : formatUSD(shipping)} />
        <SumRow label="Grand Total" value={formatUSD(grandTotal)} bold />
      </dl>

      <fieldset>
        <legend className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-ink/80">
          Select Payment Method:
        </legend>
        <div role="radiogroup" aria-label="Payment method" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {METHODS.map((m) => (
            <MethodBox
              key={m.id}
              selected={method === m.id}
              onClick={() => setMethod(m.id)}
              icon={m.icon}
              label={m.label}
            />
          ))}
        </div>
      </fieldset>

      {method === "card" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="overflow-hidden rounded-[4px] border-2 border-line bg-kiln-terracotta/10"
        >
          <div className="space-y-3 p-3">
            <div className="flex items-center gap-2">
              <VisaMark className="h-8 w-auto" />
              <MastercardMark className="h-8 w-auto" />
            </div>
            <ULineField label="Card Number" error={errors.cardNumber}>
              <input
                className="uline tabular-nums"
                inputMode="numeric"
                placeholder="1234 5678 9012 3456"
                value={form.cardNumber}
                onChange={(e) => setForm((f) => ({ ...f, cardNumber: formatCard(e.target.value) }))}
              />
            </ULineField>
            <div className="flex gap-4">
              <ULineField label="Expiration" error={errors.expiration} className="flex-1">
                <input
                  className="uline tabular-nums"
                  placeholder="MM/YY"
                  value={form.expiration}
                  onChange={(e) => setForm((f) => ({ ...f, expiration: formatExpiry(e.target.value) }))}
                />
              </ULineField>
              <ULineField label="CVV" error={errors.cvv} className="flex-1">
                <input
                  className="uline tabular-nums"
                  inputMode="numeric"
                  maxLength={4}
                  value={form.cvv}
                  onChange={(e) => setForm((f) => ({ ...f, cvv: e.target.value.replace(/\D/g, "") }))}
                />
              </ULineField>
            </div>
          </div>
        </motion.div>
      )}

      <button
        type="submit"
        className="w-full rounded-full border-2 border-line bg-kiln-clay px-4 py-3 text-sm font-bold uppercase tracking-wide text-cream shadow-card-sm transition-transform active:translate-y-px hover:bg-kiln-terracotta"
      >
        Place Secure Order
      </button>
    </form>
  );
}

function ULineField({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex items-baseline gap-2 ${className}`}>
      <span className="shrink-0 whitespace-nowrap text-[11px] font-semibold uppercase tracking-wide text-ink/80">
        {label}:
      </span>
      {children}
      {error && (
        <span role="alert" className="shrink-0 text-[10px] font-semibold uppercase text-kiln-clay">
          {error}
        </span>
      )}
    </label>
  );
}

function SumRow({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-end gap-3">
      <dt className={`uppercase tracking-wide ${bold ? "font-bold" : "font-semibold text-ink/80"}`}>
        {label}:
      </dt>
      <dd className="bracket text-sm">
        <span className="box">{value}</span>
      </dd>
    </div>
  );
}

function MethodBox({
  selected,
  onClick,
  icon,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      role="radio"
      aria-checked={selected}
      className={`relative flex flex-col items-center justify-end gap-1.5 rounded-[4px] border-2 px-2 pb-2 pt-6 text-center text-[10px] font-semibold uppercase leading-tight tracking-wide transition-colors ${
        selected ? "border-line bg-parchment" : "border-line/40 hover:border-line"
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute left-2 top-2 grid h-[14px] w-[14px] place-items-center rounded-full border-2 border-line bg-cream"
      >
        <span
          className={`h-1.5 w-1.5 rounded-full bg-kiln-clay transition-transform ${
            selected ? "scale-100" : "scale-0"
          }`}
        />
      </span>
      <span className="flex h-6 items-center">{icon}</span>
      {label}
    </button>
  );
}

function luhn(num: string): boolean {
  let sum = 0;
  let alt = false;
  for (let i = num.length - 1; i >= 0; i--) {
    let d = Number(num[i]);
    if (alt) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
    alt = !alt;
  }
  return sum % 10 === 0;
}

function formatCard(value: string): string {
  return value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 4);
  return d.length >= 3 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
}
