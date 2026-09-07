import Link from "next/link";
import css from "./Home.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "404 — Page Not Found",
	description: "The page you are looking for does not exist",
	alternates: {
		canonical: "/not-found",
	},
	openGraph: {
		title: "404 — Page Not Found",
		description: "The page you are looking for does not exist",
		url: "/not-found",
		images: [
			{
				url: "/not-found.jpg",
				width: 1200,
				height: 630,
				alt: "Page Not Found",
			},
		],
	},
};

export default function NotFound() {
	return (
		<main className={css.main}>
			<div className={`${css.container} ${css.center}`}>
				<h1 className={css.title}>404 - Page not found</h1>

		
				<p className={`${css.description} ${css.center}`}>
					Sorry, the page you are looking for does not exist.
				</p>

				<Link href='/' className={css.homeButton}>
					<svg
						width='18'
						height='18'
						viewBox='0 0 24 24'
						fill='none'
						aria-hidden='true'>
						<path
							d='M3 11.5 12 4l9 7.5M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9'
							stroke='currentColor'
							strokeWidth='1.8'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					Go Home
				</Link>

				
			</div>
		</main>
	);
}
