import { Zap } from "lucide-react";
import Link from "next/link";

interface UpgradeButtonProps {
  email?: string | null; // Corrected the type to lowercase `string`
}

export default function UpgradeButton({ email }: UpgradeButtonProps) {
  // Build the checkout URL dynamically with only the email field
  const CHECKOUT_URL = `https://codex-1997.lemonsqueezy.com/buy/a2559444-070d-4430-a267-f53cd7b3c032?checkout[email]=${encodeURIComponent(
    email || ""
  )}`;

  return (
    <Link
      href={CHECKOUT_URL}
      target="_blank" // Open link in a new tab
      rel="noopener noreferrer" // Security and performance improvement
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
        hover:from-blue-600 hover:to-blue-700 transition-all"
    >
      <Zap className="w-5 h-5" />
      Upgrade to Pro
    </Link>
  );
}
