export default function MessageInput() {
	return (
		<footer className="sticky bottom-0 p-gutter bg-background/80 backdrop-blur-md">

			<div className="max-w-4xl mx-auto flex items-center gap-3 bg-surface-container-low border border-outline-variant rounded-full px-6 py-3">

				<button>
					<span className="material-symbols-outlined">
						add_circle
					</span>
				</button>

				<input
					type="text"
					placeholder="Type a message..."
					className="flex-grow bg-transparent outline-none"
				/>

				<button>
					<span className="material-symbols-outlined">
						mood
					</span>
				</button>

				<button className="bg-primary text-on-primary w-10 h-10 rounded-full">
					<span className="material-symbols-outlined">
						send
					</span>
				</button>

			</div>

		</footer>
	);
}