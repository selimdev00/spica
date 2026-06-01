/** Small inline icons used across the order form, styled to the macet. */

export function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true">
      <rect x="1" y="1" width="18" height="18" rx="3" className="fill-kiln-fern" />
      <path d="M10 5.5v9M5.5 10h9" stroke="#F4ECDB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function TrashIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true">
      <rect x="1" y="1" width="18" height="18" rx="3" className="fill-kiln-clay" />
      <path
        d="M6 6.5h8M8.3 6.5V5.3h3.4v1.2M7 6.5l.6 7.2h4.8L13 6.5"
        stroke="#F4ECDB"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CreditCardIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 22" className={className} fill="none" aria-hidden="true">
      <rect x="1" y="1" width="30" height="20" rx="3" fill="#F4ECDB" stroke="#2A2620" strokeWidth="1.6" />
      <rect x="1" y="4.6" width="30" height="3.8" fill="#2A2620" />
      <rect x="5" y="12" width="6.5" height="4.8" rx="1" fill="#D8A24A" stroke="#2A2620" strokeWidth="0.8" />
      <path d="M16 16h11" stroke="#2A2620" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function PaypalMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 28" className={className} aria-hidden="true">
      {/* back P (light blue) */}
      <path
        fill="#009CDE"
        d="M9 6h7.3c3.4 0 5.7 1.9 5.2 5.4-.5 3.7-3.2 5.8-6.9 5.8h-3.1c-.6 0-1.1.4-1.2 1l-1 6.2c-.1.5-.5.8-1 .8H5.6c-.5 0-.8-.4-.7-.9L7.8 6.9C7.9 6.3 8.4 6 9 6z"
      />
      {/* front P (dark blue) */}
      <path
        fill="#003087"
        d="M6.4 2h7.3c3.4 0 5.7 1.9 5.2 5.4-.5 3.7-3.2 5.8-6.9 5.8H8.9c-.6 0-1.1.4-1.2 1l-1 6.2c-.1.5-.5.8-1 .8H3c-.5 0-.8-.4-.7-.9L5.2 2.9C5.3 2.3 5.8 2 6.4 2z"
      />
    </svg>
  );
}

export function VisaMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 30" className={className} aria-hidden="true">
      <rect width="48" height="30" rx="4" fill="#FBF8F1" stroke="#2A2620" strokeWidth="1.2" />
      <text
        x="24"
        y="20.5"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="13"
        letterSpacing="0.5"
        fill="#1A1F71"
      >
        VISA
      </text>
    </svg>
  );
}

export function MastercardMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 28" className={className} aria-hidden="true">
      <rect width="44" height="28" rx="4" fill="#FBF8F1" stroke="#2A2620" strokeWidth="1.2" />
      <circle cx="18" cy="14" r="8" fill="#EB001B" />
      <circle cx="26" cy="14" r="8" fill="#F79E1B" />
      {/* overlap lens */}
      <path d="M22 8.2a8 8 0 0 1 0 11.6 8 8 0 0 1 0-11.6z" fill="#FF5F00" />
    </svg>
  );
}

export function ApplePayMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 46 24" className={className} fill="#2A2620" aria-hidden="true">
      <g transform="translate(0 2) scale(0.85)">
        <path d="M13.6 9.3c-.02-2 1.64-2.96 1.72-3-.94-1.37-2.4-1.56-2.9-1.58-1.24-.13-2.42.72-3.04.72-.63 0-1.6-.71-2.62-.69-1.35.02-2.6.78-3.29 1.99-1.4 2.43-.36 6.03 1 8.01.66.97 1.45 2.05 2.49 2.01 1-.04 1.38-.65 2.58-.65 1.2 0 1.55.65 2.6.63 1.07-.02 1.76-.99 2.42-1.96.76-1.12 1.08-2.2 1.1-2.26-.02-.01-2.1-.81-2.12-3.21z" />
        <path d="M11.85 3.45c.55-.67.92-1.6.82-2.52-.79.03-1.76.53-2.33 1.2-.51.59-.96 1.54-.84 2.44.89.07 1.79-.45 2.35-1.12z" />
      </g>
      <text x="20" y="16.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="12">
        Pay
      </text>
    </svg>
  );
}

export function CartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M2 3h2.2l1.4 11.2a1.5 1.5 0 0 0 1.5 1.3h8.9a1.5 1.5 0 0 0 1.5-1.2L19 6.5H5.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17" cy="20" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function UserIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" className="fill-kiln-navy" />
      <circle cx="12" cy="9.5" r="3.4" fill="#F4ECDB" />
      <path d="M5.5 19a6.5 6.5 0 0 1 13 0z" fill="#F4ECDB" />
    </svg>
  );
}

export function BankMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 24" className={className} fill="none" stroke="#2A2620" strokeWidth="1.6" aria-hidden="true">
      <path d="M14 2.5 25 8H3z" fill="#39536B" stroke="none" />
      <path d="M3 8h22" strokeLinecap="round" />
      <path d="M6 8.5v9M11 8.5v9M17 8.5v9M22 8.5v9" />
      <path d="M3.5 17.5h21" strokeLinecap="round" />
      <path d="M2 21h24" strokeLinecap="round" />
    </svg>
  );
}
