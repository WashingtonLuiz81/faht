'use client'

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"; // Ícones do Lucide React

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('1');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-20 relative z-50">
      {/* Ícone de Menu Burger para Mobile */}
      <div className="flex items-center justify-end xl:hidden h-20 pl-4 sm:px-4">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
          {menuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Menu Principal (Desktop) */}
      <ul className="hidden xl:flex xl:items-center xl:h-20 xl:flex-row">
        {[
          { id: '1', label: 'Início', href: '/' },
          { id: '2', label: 'A Federação', href: '/a-federacao' },
          { id: '3', label: 'Competições', href: '/competicoes' },
          { id: '4', label: 'Ranking', href: '/ranking' },
          { id: '5', label: 'Calendário', href: '/calendario' },
          { id: '6', label: 'Equipes Filiadas', href: '/equipes-filiadas' },
        ].map((link) => (
          <li
            key={link.id}
            className="h-full relative md:ml-4"
            onMouseEnter={() => setHoveredLink(link.id)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              onClick={() => setActiveLink(link.id)}
              href={link.href}
              className={`relative h-full px-4 py-3 md:py-0 flex items-center justify-center text-sm font-bold uppercase hover:text-secondary transition-all duration-300 ${
                activeLink === link.id
                  ? 'text-secondary before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-secondary'
                  : 'text-white'
              } ${activeLink !== link.id
                ? 'before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-secondary hover:before:w-full before:transition-all before:duration-300'
                : ''}`}
            >
              {link.label}
            </Link>

            {/* Submenu - Competições (Somente Desktop) */}
            {hoveredLink === '3' && link.id === '3' && (
              <ul className="absolute top-full left-0 -mt-1 bg-submenu shadow-lg rounded-lg w-48 z-10 before:w-full before:h-1 before:absolute before:left-0 before:top-0 before:bg-secondary">
                <li className="flex">
                  <Link 
                    href="/competicoes/torneio1"
                    className="relative px-4 py-3 w-full text-white font-medium hover:text-secondary transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-secondary hover:before:w-full before:transition-all before:duration-300"
                  >
                    Copa Esperança
                  </Link>
                </li>
                <li className="flex">
                  <Link 
                    href="/competicoes/torneio2"
                    className="relative px-4 py-3 w-full text-white font-medium hover:text-secondary transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-secondary hover:before:w-full before:transition-all before:duration-300"
                  >
                    Liga FAht
                  </Link>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Menu Mobile (Escondido inicialmente, desliza da direita) */}
      <ul
        className={`fixed top-20 right-0 h-full bg-submenu transition-transform transform duration-300 ease-in-out z-50 flex-col w-64 sm:top-28 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {[
          { id: '1', label: 'Início', href: '/' },
          { id: '2', label: 'A Federação', href: '/a-federacao' },
          { id: '3', label: 'Competições', href: '/competicoes' },
          { id: '4', label: 'Ranking', href: '/ranking' },
          { id: '5', label: 'Calendário', href: '/calendario' },
          { id: '6', label: 'Equipes Filiadas', href: '/equipes-filiadas' },
        ].map((link) => (
          <li key={link.id} className="px-4 py-6">
            <Link
              onClick={() => {
                setActiveLink(link.id);
                setMenuOpen(false); // Fecha o menu ao clicar no link no mobile
              }}
              href={link.href}
              className={`block text-sm font-bold uppercase hover:text-secondary transition-all duration-300 ${
                activeLink === link.id ? 'text-secondary' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
