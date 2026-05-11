import LoginFormInputMin from "../../../../shared/components/LoginFormInputMin";

type LoginProps = {
	forgetMode: () => void;
};

export const LoginInputGroup = ({ forgetMode }: LoginProps) => {
	return (
		<>
		<div className="flex flex-col gap-3">
			<LoginFormInputMin name="Correo" placeholder="tu@email.com" type="email" id="email" />
			<LoginFormInputMin name="Contraseña" placeholder="••••••••" type="password" id="password" forgot={true} forgetMode={forgetMode} />
			<button 
				className="py-2 w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-sm rounded-lg primary-glow hover:opacity-90 active:scale-[0.98] transition-all duration-200 mt-base cursor-pointer" type="submit">
				Iniciar
			</button>
		</div>
		</>
	);
}