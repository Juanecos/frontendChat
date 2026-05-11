import Avatar from "./Avatar";
import ChatBubble from "./ChatBubble";

type ChatMessageProps = {
	message: string;
	avatar: string;
	time: string;
	self?: boolean;
};

export default function ChatMessage({
	message,
	avatar,
	time,
	self = false
}: ChatMessageProps) {
	return (
		<div
			className={`
				flex gap-3 items-end max-w-[85%]
				${self ? "self-end flex-row-reverse" : ""}
			`}
		>

			<Avatar src={avatar} />

			<div className={`flex flex-col gap-1 ${self ? "items-end" : ""}`}>

				<ChatBubble self={self}>
					<p>{message}</p>
				</ChatBubble>

				<span className="text-[10px] text-outline">
					{time}
				</span>

			</div>

		</div>
	);
}