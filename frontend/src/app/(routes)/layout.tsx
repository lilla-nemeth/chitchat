'use client';
// import type { Metadata } from 'next';
import { Provider } from 'react-redux';
import { makeStore } from '../lib/store';
import StyledComponentsRegistry from '../lib/registry';

// export const metadata: Metadata = {
// 	title: 'ChitChat App',
// 	description: 'ChitChat Application',
// };

const store = makeStore();
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Provider store={store}>
			<html lang='en'>
				<body>
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				</body>
			</html>
		</Provider>
	);
}
