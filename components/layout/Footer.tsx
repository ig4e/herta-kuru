import React from "react";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
	return (
		<nav className="w-full bg-zinc-200/60 dark:bg-zinc-800/60 backdrop-blur-xl fixed bottom-0 h-12">
			<div className="flex h-full justify-between items-center py-2 container mx-auto">
				<div className="flex items-center gap-4">
					<Image src={Logo} alt="Logo" width="30" height="30" />
					<h1 className=" font-bold text-zinc-800 dark:text-zinc-200">Herata Smash</h1>
				</div>

				<span className="text-sm">
					Made with ♥ by{" "}
					<Link href={"https://github.com/ig4e"} className="text-purple-500 hover:underline">
						Sekai966
					</Link>
				</span>
			</div>
		</nav>
	);
}

export default Footer;
