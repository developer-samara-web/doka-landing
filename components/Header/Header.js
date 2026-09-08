"use client";

import "./Header.css";

import { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNavbar from "./HeaderNavbar";
import HeaderPanel from "./HeaderPanel";
import { MenuIcon, XIcon } from "lucide-react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { items } = {
		items: [
			{
				name: 'Главная',
				url: '#hero'
			},
			{
				name: 'Магазин',
				url: '#shop'
			},
			{
				name: 'Ткани',
				url: '#fabrics'
			},
			{
				name: 'Работы',
				url: '#works'
			},
			{
				name: 'Контакты',
				url: '#contacts'
			}
		]
	}

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<header className="header">
			<div className="header__inner">

				<HeaderLogo />
				<HeaderNavbar items={items} isOpen={isOpen} onClose={handleClose} />

				<div className="header__actions">
					<HeaderPanel />
					<button className="header__burger" type="button" onClick={() => setIsOpen((prev) => !prev)} aria-label={isOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={isOpen}>
						{isOpen ? (
							<XIcon className="header__icon" />
						) : (
							<MenuIcon className="header__icon" />
						)}
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
