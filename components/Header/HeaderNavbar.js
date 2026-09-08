import Link from "next/link";

const HeaderNavbar = ({ items, isOpen, onClose }) => {
	return (
		<nav className={`header__navbar ${isOpen ? "header__navbar--open" : ""}`} aria-hidden={!isOpen}>
			<ul className="header__navs">
				{items?.map(({ name, url }, id) => (
					<li key={id}>
						<Link className="header__nav" href={url} onClick={onClose}>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default HeaderNavbar;
