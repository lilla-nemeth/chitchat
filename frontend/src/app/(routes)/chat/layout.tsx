export default function ChatLayout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			{/* Place for shared UI */}
			<nav></nav>
			{children}
		</section>
	);
}
