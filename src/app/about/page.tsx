import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "About Vectario, a senior-led cloud, software, and AI engineering consultancy.",
	alternates: {
		canonical: "/about",
	},
};

export default function AboutPage() {
	return (
		<main className="min-h-screen flex items-center justify-center">
			<h1 className="text-3xl font-semibold">About</h1>
		</main>
	);
}
