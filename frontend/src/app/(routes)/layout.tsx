'use client';
// import type { Metadata } from 'next';
import GlobalStyle from '../styles/globalStyles';
import { Provider } from 'react-redux';
import { makeStore } from '../lib/store';
import StyledComponentsRegistry from '../lib/registry';
import '../styles/'

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
					<StyledComponentsRegistry>
						<GlobalStyle />
						{children}
					</StyledComponentsRegistry>
				</body>
			</html>
		</Provider>
	);
}
