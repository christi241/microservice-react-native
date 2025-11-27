import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import HomeScreen from './pages/HomeScreen';
import ServicesScreen from './pages/ServicesScreen';
import SettingsScreen from './pages/SettingsScreen';

export default function App() {
  return (
    <Router>
      <div className='flex flex-col h-screen bg-gray-50 font-sans antialiased'>
        <Toaster position='top-center' />
        <Header />
        <main className='flex-1 overflow-y-auto pb-20'>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/services' element={<ServicesScreen />} />
            <Route path='/settings' element={<SettingsScreen />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}