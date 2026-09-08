import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
	return (
		<Link className="header__link" href="#main-content" aria-label="Докамебель — к началу страницы">
			<Image className="header__logo" src="/images/logo.svg" width={200} height={200} alt="Докамебель" priority />
		</Link>
	);
}

export default HeaderLogo;
