

type LoginInputProps = {
	name: string;
	placeholder: string;
	type: string;
	id: string;
	forgot?: boolean;
	forgetMode?: () => void;
};

export default function LoginFormInputMin({ name, placeholder, type, id, forgot = false, forgetMode }: LoginInputProps) {
	return (
		<div className="flex flex-col gap-3">
			{forgot ? (
				<div className="flex items-center justify-between">
					<label className="font-label-sm text-label-sm text-on-surface-variant ml-xs" htmlFor={id}>{name}</label>
					<button className="font-label-sm text-label-sm text-primary hover:underline cursor-pointer" onClick={forgetMode}>
						Olvidaste tu contraseña?
					</button>
				</div>
			) : (
				<label className="font-label-sm text-label-sm text-on-surface-variant ml-xs" htmlFor={id}>{name}</label>
			)}
			<input
				className="py-2 w-full bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-md py-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface"
				id={id}
				placeholder={placeholder}
				type={type}
			/>
		</div>

		
	);
}