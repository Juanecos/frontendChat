import Menu from "../../../../shared/svg/Menu";
import MoreVertical from "../../../../shared/svg/MoreVertical";
export default function Topbar() {
	return (
		<header className="sticky top-0 h-16 px-gutter flex items-center justify-between bg-background">

			<div className="flex items-center gap-4">
				<button className="px-4">
					<Menu />
				</button>

				<h2 className="text-title-md">
					Chat Messages
				</h2>
			</div>

			<button className="px-4">
				<MoreVertical />
			</button>

		</header>
	);
}