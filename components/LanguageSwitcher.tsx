"use client";

import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const { asPath } = useRouter();

  return (
    <div className="flex gap-2">
      <Link href={asPath} locale="pt-BR">
        <img src="/pt.png" alt="Português" />
      </Link>
      <Link href={asPath} locale="en-US">
        <img src="/us.png" alt="English" />
      </Link>
    </div>
  );
}
