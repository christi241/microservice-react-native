import { Server, Cloud, Database, Bot } from 'lucide-react';

const microservices = [
  { name: 'MS1: Authentification', icon: Server, status: 'En ligne', description: 'Gère l\'authentification des utilisateurs.' },
  { name: 'MS2: Données Utilisateur', icon: Database, status: 'En ligne', description: 'Stocke et récupère les données des utilisateurs.' },
  { name: 'MS3: Notifications', icon: Cloud, status: 'Hors ligne', description: 'Envoie des notifications push et par email.' },
  { name: 'MS4: gRPC Services', icon: Bot, status: 'En ligne', description: 'Expose des services via gRPC.' },
  { name: 'MS5: Websockets', icon: Server, status: 'En ligne', description: 'Communication en temps réel via WebSockets.' },
];

export default function ServicesScreen() {
  return (
    <div className='p-4 md:p-6'>
      <h2 className='text-xl font-bold text-gray-800 mb-4'>Vos Microservices</h2>
      <div className='space-y-4'>
        {microservices.map((service) => (
          <div key={service.name} className='bg-white rounded-lg shadow p-4 flex items-center space-x-4'>
            <div className={`p-2 rounded-full ${service.status === 'En ligne' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                <service.icon className='h-6 w-6' />
            </div>
            <div className='flex-1'>
              <div className='flex justify-between items-start'>
                <h3 className='font-bold text-gray-800'>{service.name}</h3>
                 <span className={`text-xs font-semibold px-2 py-1 rounded-full ${service.status === 'En ligne' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {service.status}
              </span>
              </div>
              <p className='text-sm text-gray-600'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}