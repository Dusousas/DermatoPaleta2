"use client";

import Link from "next/link";

export default function LanguageSwitcher() {
  return (
    <div className="flex gap-2">
      <Link href="/" locale="pt-BR"><img src="/pt.png" alt="" /></Link>
      <Link href="/" locale="en-US"><img className="" src="/us.png" alt="" /></Link>
    </div>
  );
}
