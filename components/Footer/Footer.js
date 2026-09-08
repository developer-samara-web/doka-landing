import "./Footer.css";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {

	const { header, company, shop, contacts } = {
		header: {
			description:
				'Мебель, которая создаёт уют и отражает ваш стиль. Выбирайте качественные решения для дома, созданные для комфорта, красоты и долгих лет использования.',
			copyright: '© 2026 Докамебель, Все права защищены.'
		},

		company: [
			{
				name: "Главная страница",
				url: "#main-content",
			},
			{
				name: "Каталог товаров",
				url: "#shop",
			},
			{
				name: "Почему именно мы",
				url: "#main-content",
			},
			{
				name: "Партнеры",
				url: "#partners",
			},
			{
				name: "Отзывы",
				url: "#reviews",
			},
			{
				name: "О нас",
				url: "#about",
			},
		],

		shop: [
			{
				name: "Все товары",
				url: "#shop",
			},
			{
				name: "Диваны на дачу",
				url: "#shop",
			},
			{
				name: "Диваны-кровати",
				url: "#shop",
			},
			{
				name: "Кровать в спальню",
				url: "#shop",
			},
			{
				name: "Столы на кухню",
				url: "#shop",
			},
		],

		contacts: {
			email: {
				name: "Почта",
				value: "doka14mebel@mail.ru",
				url: "mailto:doka14mebel@mail.ru",
			},
			address: {
				name: "Адрес",
				value: "ул. Железнодорожная, д. 1 «Б»",
			},
			phone: {
				name: "Телефон",
				value: "+7 (925) 886-62-79",
				url: "tel:+79258866279",
			},
		}
	};

	return (
		<footer id="contacts" className="footer">
			<div className="footer__inner">

				<div className="footer__top">
					<div className="footer__col">
						<Image className="footer__image" src="/images/logo.svg" width={250} height={100} alt="Докамебель" />
						<p className="footer__description">
							{header.description}
						</p>
					</div>
					<div className="footer__navs">
						<div className="footer__nav">
							<h2 className="footer__name">
								Компания
							</h2>

							<ul className="footer__links">
								{company.map(({ name, url }) => (
									<li key={name}>
										<Link className="footer__link" href={url}>
											{name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="footer__nav">
							<h2 className="footer__name">
								Магазин
							</h2>

							<ul className="footer__links">
								{shop.map(({ name, url }) => (
									<li key={name}>
										<Link className="footer__link" href={url}>
											{name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="footer__nav">
							<h2 className="footer__name">
								Контакты
							</h2>

							<div className="footer__links footer__links--contacts">

								<div className="footer__line flex flex-col">
									<span className="font-medium text-gray-800">
										{contacts.email.name}
									</span>

									<a className="text-gray-600" href={contacts.email.url}>
										{contacts.email.value}
									</a>
								</div>

								<div className="footer__line flex flex-col">
									<span className="font-medium text-gray-800">
										{contacts.address.name}
									</span>

									<span className="text-gray-600">
										{contacts.address.value}
									</span>
								</div>

								<div className="footer__line flex flex-col">
									<span className="font-medium text-gray-800">
										{contacts.phone.name}
									</span>

									<a className="text-gray-600" href={contacts.phone.url}>
										{contacts.phone.value}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="footer__bottom">
					<div className="footer__bottom-inner">
						<Link className="footer__policy" href="#">
							Политика конфиденциальности
						</Link>

						<span className="footer__copyright">
							{header.copyright}
						</span>
					</div>
					<Link className="footer__designer" href="https://samara.fun" >
						<Image src="/images/samara.svg" width={100} height={100} alt="Designer" />
					</Link>
				</div>

			</div>
		</footer>
	);
}

export default Footer;
