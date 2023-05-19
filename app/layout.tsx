import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Herta Smash~",
	description: "Smash Herta to your heart's content",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className + "bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-50"}>
				<Navbar></Navbar>
				{children}
				<Footer></Footer>
			</body>
		</html>
	);
}
