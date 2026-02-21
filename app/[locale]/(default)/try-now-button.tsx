"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { trackTryItNowClick } from "@/lib/analytics";

export function TryNowButton({ locale, label }: { locale: string; label: string }) {
  return (
    <Link
      href={`/${locale}/txt-to-image/nano-banana`}
      onClick={() => trackTryItNowClick('hero')}
    >
      <Button
        size="lg"
        className="btn-gradient-primary px-8 py-6 text-lg rounded-full shadow-md"
      >
        {label}
      </Button>
    </Link>
  );
}
