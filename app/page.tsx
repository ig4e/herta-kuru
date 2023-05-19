"use client";

import Herta from "@/components/Herta";
import Image from "next/image";
import { useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

export default function Home() {
	const [count, setCount] = useState(Number(localStorage.getItem("count")) || 0);

	function increaseCount() {
		playKuru();
		addHerta();
		return setCount((count) => count + 1);
	}

	//class="absolute top-[50%] translate-y-[-50%]"
	function addHerta() {
		const herta = document.createElement("div");

		herta.className = "absolute w-full h-full translate-x-[100%] md:bottom-4";

		herta.innerHTML = '<div class="max-h-[20rem]"></div>' + renderToStaticMarkup(Herta()) + "</div>";

		const hertasContainer = document.getElementById("kuru")!;

		const hertaDoc = hertasContainer.appendChild(herta)!;

		console.log();

		const animation = hertaDoc.animate([{}, {}, { transform: "translateX(-200%)" }], (hertasContainer.clientWidth / 1000) * 2000);

		animation.onfinish = () => {
			hertaDoc.remove();
		};

		return;
	}

	async function playKuru() {
		if (typeof window !== "undefined") {
			const audioList = [new Audio("audio/kuruto.mp3"), new Audio("audio/kuru1.mp3"), new Audio("audio/kuru2.mp3")];

			const audio = audioList[Math.floor(Math.random() * audioList.length)].cloneNode() as HTMLAudioElement;
			audio.volume = 0.8;

			return audio.play();
		}
	}

	useEffect(() => {
		localStorage.setItem("count", count.toString());
	}, [count]);

	return (
		<main>
			<div className="bg-zinc-200 dark:bg-zinc-800">
				<div className=" mx-auto text-center h-[calc(100vh-7rem)] md:h-full py-4 flex flex-col">
					<div className="flex flex-col items-center">
						<h2 className="text-xl font-semibold">The kuru~ has been smashed</h2>
						<span className="text-5xl text-purple-500 font-bold">{count}</span>
					</div>

					<div
						id="kuru"
						className="h-full md:h-[40vh] relative overflow-hidden border-t-2 border-b-2 border-zinc-300 dark:border-zinc-700 my-4"
					></div>

					<div className="flex flex-col items-center gap-4">
						<button
							className="text-lg font-semibold bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-500 active:bg-purple-700 hover:-translate-y-0.5 active:translate-y-0.5 select-none transition"
							onClick={increaseCount}
						>
							Smash Herata~!
						</button>

						<span>The website for Herta, The annoying cutest genius Honkai: Star Rail character out there.</span>
					</div>
				</div>
			</div>
		</main>
	);
}
