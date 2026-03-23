"use client";

import { useEffect, useState } from "react";

interface PhoneNumberProps {
  phone: string;
  href: string;
  className?: string;
}

/**
 * Anti-scraping phone number component.
 * - Renders nothing on SSR (no phone in HTML source)
 * - Assembles the number client-side via JS
 * - Uses CSS direction trick as fallback display
 */
export default function PhoneNumber({ phone, href, className }: PhoneNumberProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // SSR: render nothing — bots see no phone number in source
    return (
      <span className={className} aria-hidden="true">
        &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
      </span>
    );
  }

  return (
    <a href={href} className={className} aria-label="Call us">
      {phone}
    </a>
  );
}
