import { useState } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Formations', href: '#formations' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-blue-600 text-white">
              <GraduationCap size={20} />
            </div>
            <span className="font-bold text-lg">Académie Pro</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#admissions" className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Candidater
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#admissions" className="block w-full text-center py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700" onClick={() => setOpen(false)}>
              Candidater
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
