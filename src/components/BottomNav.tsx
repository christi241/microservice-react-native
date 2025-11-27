import { Home, Briefcase, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', label: 'Accueil', icon: Home },
  { href: '/services', label: 'Services', icon: Briefcase },
  { href: '/settings', label: 'Réglages', icon: Settings },
];

export default function BottomNav() {
  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10'>
      <div className='max-w-md mx-auto flex justify-around'>
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full pt-2 pb-1 text-sm font-medium ` +
              (isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600')
            }
          >
            <item.icon className='h-6 w-6 mb-1' />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}