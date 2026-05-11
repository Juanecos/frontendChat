type AuthCardProps = {
	title: string;
	description: string;

	children: React.ReactNode;

	footerText?: string;
	footerAction?: string;
	onFooterClick?: () => void;
};

export default function AuthCard({
	title,
	description,
	children,
	footerText,
	footerAction,
	onFooterClick
}: AuthCardProps) {
	return (
		<>
			<div className="text-center">
				<h1 className="text-5xl">{title}</h1>

				<p className="font-body-md text-body-md text-on-surface-variant">
					{description}
				</p>
			</div>

			{children}

			{footerText && footerAction && (
				<div className="text-center mt-base">
					<p className="font-body-md text-body-md text-on-surface-variant">
						{footerText}

						<button
							type="button"
							className="text-primary cursor-pointer font-bold hover:underline ml-xs"
							onClick={onFooterClick}
						>
							{footerAction}
						</button>
					</p>
				</div>
			)}
		</>
	);
}