
import LoginFormInputMin from "../../../../shared/components/LoginFormInputMin";
export const RegisterInputGroup = () => {
	return (
		<>
			<LoginFormInputMin name="Correo" placeholder="@tuNickname" type="email" id="email" forgot={false} />
			<LoginFormInputMin name="Nombre de usuario" placeholder="@tuNickname" type="text" id="username" forgot={false} />
			<LoginFormInputMin name="Contraseña" placeholder="••••••••" type="password" id="password" forgot={false} />
			<LoginFormInputMin name="Confirmar Contraseña" placeholder="••••••••" type="password" id="passwordcheck" forgot={false} />
		</>
	);
}