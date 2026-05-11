import LoginFormInputMin from "../../../../shared/components/LoginFormInputMin";

export const ForgotInputGroup = () => {
	return (
		<div className="flex flex-col gap-4">
			<LoginFormInputMin name="Correo" type="email" placeholder="tu@email.com" id="email"/>
		</div>
	);
}