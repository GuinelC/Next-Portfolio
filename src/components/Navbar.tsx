import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
  
        <p className="font-caesar text-4xl"><span>C</span>G</p>

      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none' }}>
        <li>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>
            Contact
          </Link>
        </li>
        {/* Autres liens si nécessaire */}
      </ul>
    </nav>
  );
}
