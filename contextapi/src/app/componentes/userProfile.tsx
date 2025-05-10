"use client"
import { useAuth } from '../Context/authContext';

const UserProfile = () => {
  const { user, login, logout } = useAuth();

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      {user ? (
        <>
          <h2>Bienvenido, {user.name}</h2>
          <button onClick={logout}>Cerrar Sesión</button>
        </>
      ) : (
        <>
          <h2>No has iniciado sesión</h2>
          <button onClick={login}>Iniciar Sesión</button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
