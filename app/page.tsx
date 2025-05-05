import Image from "next/image";
import kompact from "@/public/kompact.png";

export default function Page() {
	return (
		<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
			<div className="border border-white rounded-4xl px-12 py-4">
				<Image
					src={kompact.src}
					alt="Kompact title"
					width={kompact.width}
					height={kompact.height}
					className="w-32"
				/>
			</div>
		</main>
	);
}
