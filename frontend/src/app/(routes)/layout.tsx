'use client';

import GlobalStyle from '../styles/globalStyles';
import { Provider } from 'react-redux';
import { makeStore } from '../lib/store';
import StyledComponentsRegistry from '../lib/registry';
import { nunito, abrilFatface } from '../styles/fonts';

const store = makeStore();
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Provider store={store}>
			<html lang='en' className={`${nunito.className} ${abrilFatface.className}`}>
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
