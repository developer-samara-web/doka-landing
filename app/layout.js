import "./globals.css";

export const metadata = {
	title: {
		default: "Докамебель — Мебель для дома",
		template: "%s | Докамебель",
	},
	description: "Мебель для дома: диваны, кровати, столы и решения для уютного интерьера.",
	robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#f8fafc" };

const RootLayout = ({ children }) => {
	return (
		<html lang="ru">
			<body>{children}</body>
		</html>
	);
}

export default RootLayout;
