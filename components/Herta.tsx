import React from "react";
import Image from "next/image";

function Herta() {
	const hertas = ["/images/hertaa1.gif", "/images/hertaa2.gif"];

	return (
		<div className="md:max-h-[24rem] flex">
			<Image
				src={hertas[Math.floor(Math.random() * hertas.length)]}
				alt="Herta"
				width={256}
				height={256}
				priority
				className="w-full h-full md:w-auto md:h-auto object-cover"
			></Image>
		</div>
	);
}

export default Herta;
