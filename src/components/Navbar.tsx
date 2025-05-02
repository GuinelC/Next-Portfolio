"use client";
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollLink = (id: string) => {
    if (pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <p className="font-caesar text-4xl"><span>C</span>G</p>

      <button className="burger" onClick={() => setMenuOpen(prev => !prev)}>☰</button>

      <ul className={menuOpen ? 'open' : ''}>
        {menuOpen && <li className="menu-title">MENU</li>}
        <li>
          <button onClick={() => handleScrollLink('aboutMe')} className="nav-link">À propos</button>
        </li>
        <li>
          <button onClick={() => handleScrollLink('git')} className="nav-link">Git</button>
        </li>
        <li>
          <button onClick={() => handleScrollLink('competences')} className="nav-link">Compétences</button>
        </li>
        <li>
          <button onClick={() => handleScrollLink('projet')} className="nav-link">Projets</button>
        </li>
        <li>
          <Link href="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
