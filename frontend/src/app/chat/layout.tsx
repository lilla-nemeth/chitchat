export default function ChatLayout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			{/* Place for share UI */}
			<nav></nav>
			{children}
		</section>
	);
}
