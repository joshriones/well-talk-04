import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./../../css/createblog.css";

const profileMenuItems = [
	{
		label: "My Profile",
	},
	{
		label: "Edit Profile",
	},
	{
		label: "Sign Out",
	},
];

function ProfileMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<div className="relative">
			<button
				onClick={() => setIsMenuOpen((prev) => !prev)}
				className="flex items-center gap-1 rounded-full py-3 pr-2 mr-20 pl-0.5 lg:ml-auto text-blue-gray-700">
				<img
					src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
					alt="Profile"
					className="h-10 w-10 rounded-full border border-gray-900"
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className={`h-4 w-4 transition-transform ${
						isMenuOpen ? "rotate-180" : ""
					}`}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>
			{isMenuOpen && (
				<div className="absolute right-0 w-48 bg-white border border-gray-300 rounded-lg shadow-lg font-Jaldi ">
					{profileMenuItems.map(({ label }, index) => (
						<button
							key={index}
							onClick={closeMenu}
							className={`block px-4 py-2 text-sm text-blue-gray-700 hover:bg-blue-gray-100 ${
								index === profileMenuItems.length - 1
									? "rounded-b-lg"
									: ""
							}`}>
							{label}
						</button>
					))}
				</div>
			)}
		</div>
	);
}

function NavList({ userType }) {
	const router = useRouter();
	let navigationItems = [];

	switch (userType) {
		case "student":
			navigationItems = [
				{ label: "Home", route: "/student/student-home" },
				{ label: "Appointment", route: "/student/student-appointment" },
				{ label: "Journal", route: "/student/student-journal" },
				{ label: "Inquiry", route: "/student/student-inquiry" },
			];
			break;
		case "teacher":
			navigationItems = [
				{ label: "Home", route: "/resident-home" },
				{ label: "Referral", route: "/resident-account" },
			];
			break;
		case "counselor":
			navigationItems = [
				{ label: "Home", route: "/counselor/counselor-dashboard" },
				{ label: "Blogs", route: "/counselor/counselor-blog" },
				{
					label: "Appointment",
					route: "/counselor/counselor-appointment",
				},
				{ label: "Referral", route: "/counselor/counselor-referral" },
				{ label: "Events", route: "/counselor/counselor-events" },
				{ label: "Inquiry", route: "/counselor/counselor-inquiry" },
			];
			break;
		default:
			navigationItems = [];
	}

	return (
		<ul className="mt-2 mb-4 flex flex-col gap-12 lg:mb-0 lg:mt-0 lg:flex-row lg:items-right font-Merriweather font-bold text-xl mr-8">
			{navigationItems.map((item, index) => (
				<a
					key={index}
					onClick={() => router.push(item.route)}
					className={`text-base font-medium text-blue-gray-500 hover:text-blue-gray-700 cursor-pointer${
						router.pathname === item.route ? "text-blue-900" : ""
					} nav-list-button`}>
					{item.label}
				</a>
			))}
		</ul>
	);
}

export function Navbar({ userType }) {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const handleScroll = () => {
			const navbar = document.getElementById("navbar");
			if (navbar) {
				if (window.scrollY > navbar.offsetTop) {
					navbar.classList.add("fixed", "top-0", "z-50", "bg-white");
				} else {
					navbar.classList.remove(
						"fixed",
						"top-0",
						"z-50",
						"bg-white"
					);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			id="navbar"
			className="mx-auto max-w-screen-auto p-2 lg:pl-6 bg-blue-gray-900 w-full border-b border-gray-200">
			<div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
				<div className="ml-24 text-2xl text-[#6B9080] font-bold">
					WellTalk
				</div>
				<div className="hidden lg:block flex items-center gap-8 lg:ml-auto">
					<NavList
						userType={userType}
						router={router}
					/>{" "}
					{/* pass ang router as prop */}
				</div>
				<button
					onClick={() => setIsNavOpen((prev) => !prev)}
					className="ml-auto mr-2 lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-blue-gray-700"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
				{userType !== "landing" && <ProfileMenu />}
			</div>
			{isNavOpen && (
				<div className="bg-white lg:hidden">
					<NavList
						userType={userType}
						router={router}
					/>{" "}
					{/* pass ang router as prop */}
				</div>
			)}
		</nav>
	);
}
