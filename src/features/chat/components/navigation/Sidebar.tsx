import SidebarItem from "./SidebarItem";
import Home from "../../../../shared/svg/Home";
import MessageSquare from "../../../../shared/svg/MessageSquare";
import User from "../../../../shared/svg/User";

export default function Sidebar() {
	return (
		<aside className="fixed left-0 top-0 h-screen w-72 bg-surface flex flex-col">

			<div className="p-lg">
				<h1 className="text-headline-lg text-primary font-bold">
					Anime Online Chat
				</h1>

				<p className="text-on-surface-variant">
					Online
				</p>
			</div>

			<nav className="flex flex-col gap-2 px-2">

				<SidebarItem
					icon= {<Home />}
					label="Home"
				/>

				<SidebarItem
					icon= {<MessageSquare />}
					label="Rooms"
					active
				/>

				<SidebarItem
					icon= {<User />}
					label="Edit Profile"
				/>

			</nav>

		</aside>
	);
}