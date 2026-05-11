import Sidebar from "../components/navigation/Sidebar";
import Topbar from "../components/navigation/TopBar";

type ChatLayoutProps = {
	children: React.ReactNode;
};

export default function ChatLayout({
	children
}: ChatLayoutProps) {
	return (
		<div className=" min-h-screen">

			<Sidebar />

			<main className="ml-72 flex flex-col min-h-screen bg-background">

				<Topbar />

				<section className="flex-grow overflow-y-auto px-gutter py-lg">
					{children}
				</section>

			</main>

		</div>
	);
}