import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'ChitChat App',
	description: 'ChitChat Application',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}
