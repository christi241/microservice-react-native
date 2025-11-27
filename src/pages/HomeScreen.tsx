export default function HomeScreen() {
  return (
    <div className='p-4 md:p-6'>
      <div className='bg-white rounded-lg shadow p-6 text-center'>
        <h2 className='text-2xl font-bold text-gray-800 mb-2'>Bienvenue sur JengaApp</h2>
        <p className='text-gray-600'>Votre tableau de bord central pour la gestion des microservices.</p>
      </div>
      <div className='mt-6 space-y-4'>
        <div className='bg-white rounded-lg shadow p-4'>
            <h3 className='font-bold text-gray-800'>Activité Récente</h3>
            <p className='text-sm text-gray-500 mt-2'>Aucune activité récente à afficher.</p>
        </div>
         <div className='bg-white rounded-lg shadow p-4'>
            <h3 className='font-bold text-gray-800'>Statut des Services</h3>
            <p className='text-sm text-gray-500 mt-2'>Tous les services sont opérationnels.</p>
        </div>
      </div>
    </div>
  );
}