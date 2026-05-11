import ChatLayout from "../features/chat/layouts/ChatLayout";

import ChatMessage from "../features/chat/components/minimal/ChatMessage";
import FileMessage from "../features/chat/components/minimal/FileMessage";
import MessageInput from "../features/chat/components/minimal/MessageInput";

export default function ChatPage() {
	return (
		<ChatLayout>

			<div className="flex flex-col gap-6">

				<ChatMessage
					message="Hey! Have you seen the latest updates?"
					avatar="/avatar1.png"
					time="10:25 AM"
				/>

				<ChatMessage
					message="Looks amazing 🚀"
					avatar="/avatar2.png"
					time="10:27 AM"
					self
				/>

				<FileMessage
					fileName="system_v2_final.json"
					size="4.2 MB"
					time="10:30 AM"
					avatar="/avatar3.png"
				/>

			</div>

			<MessageInput />

		</ChatLayout>
	);
}