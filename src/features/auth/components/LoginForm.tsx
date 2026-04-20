// src/features/auth/components/LoginForm.tsx
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../../shared/lib/axios';
import { useAuthStore } from '../store/authStore';

// Definir tipos para la respuesta y error de la mutación
interface User {
  id: number;
  name: string;
  email: string;
}

interface LoginResponse {
  access_token: string;
  user: User;
}


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, setAccessToken } = useAuthStore();

  // Tipar correctamente la mutación
  const mutation = useMutation<LoginResponse, Error, { email: string; password: string }>({
    mutationFn: async ({ email, password }) => {
      const response = await axiosInstance.post('/auth/login', { email, password });
      return response.data;
    },
    onSuccess: (data) => {
      setAccessToken(data.access_token);
      setUser(data.user);
    },
    onError: (error) => {
      console.error('Error de login:', error);
    },
  });

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ email, password }); // Ejecutar la mutación
  };

	// TODO: Probar este formualario, el email.prevent y el mutation no estan funcionando, poner un mensaje si la respuesta es error
  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Iniciando sesión...' : 'Iniciar sesión'}
      </button>

      {/* Animación de loading */}
      {mutation.isPending && <div className="loading-spinner">Cargando...</div>}

      {/* Mostrar mensaje de error si hay alguno */}
      {mutation.isError && <div className="error">Error al iniciar sesión</div>}

      {/* Animación de entrada al chat después de login exitoso */}
      {mutation.isSuccess && (
        <div className="chat-entry-animation">
          <p>Bienvenido al chat</p>
          {/* Aquí puedes agregar la animación de entrada */}
        </div>
      )}
    </form>
  );
};

export default LoginForm;