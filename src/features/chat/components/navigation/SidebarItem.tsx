type SidebarItemProps = {
	icon: React.ReactNode;
	label: string;
	active?: boolean;
};

export default function SidebarItem({
	icon,
	label,
	active = false
}: SidebarItemProps) {
	return (
		<button
			className={`
				flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors duration-200
				${active
					? "bg-primary-container text-on-primary-container"
					: "text-on-surface-variant hover:bg-surface-container-high"}
			`}
		>
			{icon}
			{/* <span className="material-symbols-outlined">
				{icon}
			</span> */}

			<span>{label}</span>
		</button>
	);
}