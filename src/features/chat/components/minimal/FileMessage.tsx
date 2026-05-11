import Avatar from "./Avatar";

type FileMessageProps = {
	fileName: string;
	size: string;
	time: string;
	avatar: string;
};

export default function FileMessage({
	fileName,
	size,
	time,
	avatar
}: FileMessageProps) {
	return (
		<div className="flex gap-3 items-end">

			<Avatar src={avatar} />

			<div className="bg-surface-container border border-outline-variant rounded-xl p-4 w-full max-w-sm">

				<div className="flex items-center justify-between">

					<div>
						<p className="font-bold">
							{fileName}
						</p>

						<p className="text-sm text-outline">
							{size}
						</p>
					</div>

					<button>
						<span className="material-symbols-outlined">
							download
						</span>
					</button>

				</div>

				<span className="text-[10px] text-outline">
					{time}
				</span>

			</div>

		</div>
	);
}