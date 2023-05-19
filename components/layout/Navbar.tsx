import React from "react";
import Logo from "@/public/images/logo.png";
import Image from "next/image";

function Navbar() {
	return (
		<nav className="w-full bg-zinc-200/60 dark:bg-zinc-800/60 backdrop-blur-xl h-16">
			<div className="flex h-full justify-center items-center py-2 container mx-auto gap-2">
				<Image src={Logo} alt="Logo" width="60" height="60" className="w-10 h-10 md:w-14 md:h-14" />
                <h1 className="md:hidden">Herata Smash</h1>
			</div>
		</nav>
	);
}

export default Navbar;
