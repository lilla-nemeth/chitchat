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
		<html lang='en'>
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
