// import React from 'react';
// import { useState } from 'react';
import {  useLoginHooks } from "../hooks/useLoginHooks";

import { LoginInputGroup } from './authBox/LoginInputGroup';
import { RegisterInputGroup } from './authBox/RegisterInputGroup';
import { ForgotInputGroup } from "./authBox/ForgotInputGroup";

import BackgroundVideo from "./video/BackgroundVideo";
import AuthCard from "./authBox/AuthCard";

const LoginForm = () => {

	const { mode, showLogin, showRegister, showForget } = useLoginHooks();
  return (
		
    <div className="relative min-h-screen overflow-hidden bg-background text-on-background">
			<BackgroundVideo />

      {/* Main Content */}
			<main className="relative z-30 flex min-h-screen items-center justify-center px-4 ">

        {/* Login Card */}
        <div className="p-10 glass-surface w-full max-w-[440px] rounded-xl border border-outline-variant/20 relative z-10 flex flex-col gap-5">

				{mode === 'login' && (
					<AuthCard
						title="Iniciar Sesión"
						description="Inicia sesión en anime online chat para seguir con la diversión!!"
						footerText="Aún no tienes una cuenta? "
						footerAction="Regístrate"
						onFooterClick={showRegister}
					>
						<form className="flex flex-col gap-10">
							<LoginInputGroup forgetMode={showForget} />
						</form>
					</AuthCard>
				)}
				{mode === 'register' && (
					<AuthCard
						title="Registrarse"
						description="Aquí empieza tu aventura!!"
						footerText="Ya tienes una cuenta? "
						footerAction="Inicia sesión"
						onFooterClick={showLogin}
					>
						<form className="flex flex-col gap-2">
							<RegisterInputGroup />

							<button
								className="py-2 w-full bg-primary-container text-on-primary-container rounded-lg"
								type="submit"
							>
								Registrarme
							</button>
						</form>
					</AuthCard>
					
				)}
				{mode === 'forget' && (
					<AuthCard
						title="Recuperar contraseña"
						description="Te ayudaremos a recuperar tu cuenta."
						footerText="¿Recordaste tu contraseña? "
						footerAction="Volver a iniciar sesión"
						onFooterClick={showLogin}
					>
						<form className="flex flex-col gap-2">	
							<ForgotInputGroup />
							<button
								className="py-2 w-full bg-primary-container text-on-primary-container rounded-lg"
								type="submit"
							>
								Enviar solicitud
							</button>
						</form>

					</AuthCard>
				)}

        </div>
      </main>
    </div>
  );
};

export default LoginForm;