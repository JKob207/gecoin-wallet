import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './globals.css';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto'
});

export const metadata: Metadata = {
	title: 'Gecoin wallet app',
	description: 'Manage your GEC',
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${roboto.variable} antialiased`}
			>
				<AppRouterCacheProvider
					options={{ key: 'css' }}
				>
					<ThemeProvider theme={theme}>
						{children}
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
