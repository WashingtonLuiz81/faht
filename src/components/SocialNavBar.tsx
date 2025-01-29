'use client';
import { Youtube } from 'lucide-react';
import Link from 'next/link';

const SocialNavBar = () => {
  return (
    <ul className="flex space-x-4">
      <li className="relative">
        <Link href="">
          <Youtube size={24} className="text-white relative z-10" />
          <span className="absolute inset-0 bg-yellow-500 skew-x-[-33deg] opacity-0 transition-all duration-400 group-secondary:opacity-100 group-secondary:-left-2 group-secondary:-right-2" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialNavBar;
