import { ChevronRight, Bell, User, Lock } from 'lucide-react';

const settingsItems = [
    { icon: User, label: 'Profil', description: 'Gérez les détails de votre profil.' },
    { icon: Bell, label: 'Notifications', description: 'Ajustez vos préférences de notification.' },
    { icon: Lock, label: 'Sécurité', description: 'Modifiez votre mot de passe et activez 2FA.' },
];

export default function SettingsScreen() {
  return (
    <div className='p-4 md:p-6'>
      <h2 className='text-xl font-bold text-gray-800 mb-4'>Réglages</h2>
      <div className='bg-white rounded-lg shadow'>
        <ul className='divide-y divide-gray-200'>
            {settingsItems.map(item => (
                 <li key={item.label} className='p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer'>
                    <div className='flex items-center space-x-4'>
                        <item.icon className='h-6 w-6 text-gray-500' />
                        <div>
                            <p className='font-semibold text-gray-800'>{item.label}</p>
                            <p className='text-sm text-gray-500'>{item.description}</p>
                        </div>
                    </div>
                    <ChevronRight className='h-5 w-5 text-gray-400' />
                </li>
            ))}
        </ul>
      </div>
       <div className='mt-6 text-center'>
            <button className='w-full max-w-xs mx-auto bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors'>
                Se Déconnecter
            </button>
        </div>
    </div>
  );
}