import { AuthProvider } from './Context/authContext';
import UserProfile from '../app/componentes/userProfile';

export default function Home() {
  return (
    <AuthProvider>
      <main style={{textAlign: 'center', padding: '2rem' }}>
        <h1>Autenticación</h1>
        <UserProfile />
      </main>
    </AuthProvider>
  );
}

