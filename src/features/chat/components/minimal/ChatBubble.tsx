type ChatBubbleProps = {
	children: React.ReactNode;
	self?: boolean;
};

export default function ChatBubble({
	children,
	self = false
}: ChatBubbleProps) {
	return (
		<div
			className={`
				px-4 py-3 rounded-xl max-w-lg
				${self
					? "bg-secondary-container text-on-secondary-container rounded-br-sm"
					: "bg-surface-container text-on-surface rounded-bl-sm"}
			`}
		>
			{children}
		</div>
	);
}