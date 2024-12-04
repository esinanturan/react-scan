'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <nav className="flex justify-between items-center">
      <Link
        href="/"
        className="flex items-center gap-3 no-underline text-inherit"
      >
        <Image src="/logo.svg" alt="react-scan-logo" width={30} height={30} />
        <h3>
          <strong className="font-mono">React Scan</strong>
        </h3>
      </Link>
      <div className="flex gap-4">
        <a
          href="https://github.com/aidenybai/react-scan#readme"
          className="text-neutral-600 underline hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs
        </a>
        <a
          href="https://github.com/aidenybai/react-scan"
          className="text-neutral-600 underline hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          source ↗
        </a>
      </div>
    </nav>
  );
}
