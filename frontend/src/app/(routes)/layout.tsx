import type { Metadata } from 'next';
import StyledComponentsRegistry from '../lib/registry';

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
		<StyledComponentsRegistry>
			<html lang='en'>
				<body>{children}</body>
			</html>
		</StyledComponentsRegistry>
	);
}
