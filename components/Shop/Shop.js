import "./Shop.css";

import Title from "@/components/ui/Title/Title";
import Image from "next/image";
import { Bars2Icon } from "@heroicons/react/24/outline";

const Shop = () => {

	const { header, items } = {
		header: {
			title: "Популярные товары",
			badge: "Каталог товаров"
		},

		items: [
			{
				image: "/images/shop/1.webp",
				description: "Элегантное кресло с лаконичным силуэтом и мягкой посадкой. Универсальный серый оттенок легко впишется в современный интерьер.",
				price: "18 900 ₽"
			},
			{
				image: "/images/shop/2.webp",
				description: "Уютное кресло с фактурной обивкой, округлой спинкой и глубоким сиденьем. Отличный вариант для комфортного отдыха и спокойного интерьера.",
				price: "24 500 ₽"
			},
			{
				image: "/images/shop/7.webp",
				description: "Современный диван с чистыми линиями и нейтральной обивкой. Практичный вариант для светлого интерьера в минималистичном стиле.",
				price: "62 500 ₽"
			},
			{
				image: "/images/shop/8.webp",
				description: "Уютный диван в натуральном коричневом оттенке с объемными сиденьями и удобными подлокотниками. Хорошо подойдет для теплого и камерного интерьера.",
				price: "58 900 ₽"
			},
			{
				image: "/images/shop/9.webp",
				description: "Элегантная модель с мягкой спинкой и сдержанным серо-зеленым оттенком. Станет гармоничной основой современной гостиной.",
				price: "67 900 ₽"
			},
			{
				image: "/images/shop/5.webp",
				description: "Минималистичное кресло в спокойном светлом оттенке. Компактная форма и мягкая посадка делают его удобным решением для гостиной или спальни.",
				price: "19 500 ₽"
			},
			{
				image: "/images/shop/6.webp",
				description: "Просторный диван в теплой бежевой гамме с лаконичным дизайном. Мягкие подушки и глубокая посадка создают атмосферу домашнего комфорта.",
				price: "54 900 ₽"
			},
			{
				image: "/images/shop/10.webp",
				description: "Стильный диван глубокого бордового оттенка с декоративной стежкой на спинке. Эффектная модель для интерьера с выразительными акцентами.",
				price: "72 500 ₽"
			},
			{
				image: "/images/shop/11.webp",
				description: "Лаконичная кровать с мягким изголовьем и спокойной светлой обивкой. Создает ощущение легкости и отлично подходит для современно оформленной спальни.",
				price: "46 900 ₽"
			},
			{
				image: "/images/shop/12.webp",
				description: "Уютная модель с широким мягким изголовьем и компактным силуэтом. Идеальный выбор для спальни, где важны комфорт и сдержанная эстетика.",
				price: "52 900 ₽"
			},
			{
				image: "/images/shop/13.webp",
				description: "Современная кровать с мягкой обивкой и массивным изголовьем. Темный оттенок придает модели выразительность и делает ее заметным элементом спальни.",
				price: "64 900 ₽"
			},
			{
				image: "/images/shop/14.webp",
				description: "Сочетание натурального дерева и светлого текстиля создает теплый и уютный образ. Подойдет для спальни в скандинавском, классическом или природном стиле.",
				price: "71 500 ₽"
			},
			{
				image: "/images/shop/15.webp",
				description: "Воздушная модель с мягким изголовьем и аккуратными ножками. Благодаря легкому дизайну кровать визуально не перегружает пространство.",
				price: "49 900 ₽"
			},
			{
				image: "/images/shop/3.webp",
				description: "Выразительное кресло с классической стеганой спинкой и благородной темно-коричневой обивкой. Добавит интерьеру солидности и характера.",
				price: "32 900 ₽"
			},
			{
				image: "/images/shop/4.webp",
				description: "Яркое акцентное кресло с округлыми формами и мягкой стеганой спинкой. Подойдет для интерьеров, где хочется добавить цвета и уюта..",
				price: "21 900 ₽"
			},
		]
	}

	return (
		<section id="shop" className="shop" aria-labelledby="shop-title">
			<div className="shop__inner">
				<Title id="shop-title" title={header.title} badge={header.badge} />
				<div className="shop__menu" role="group" aria-label="Категории каталога">
					<button className="shop__menu-item shop__menu-item--active" type="button">
						<Bars2Icon className="size-4" aria-hidden="true" />
						Все категории
					</button>
					<button className="shop__menu-item" type="button">
						<Bars2Icon className="size-4" aria-hidden="true" />
						Диваны
					</button>
					<button className="shop__menu-item" type="button">
						<Bars2Icon className="size-4" aria-hidden="true" />
						Столы
					</button>
					<button className="shop__menu-item" type="button">
						<Bars2Icon className="size-4" aria-hidden="true" />
						Кровати
					</button>
				</div>
				<ul className="shop__items">
					{items.map((item, id) => (
						<li className="shop__item" key={id}>
							<Image className="shop__image" src={item.image} width={300} height={300} alt="Элегантное мягкое кресло" />
							<p className="shop__description">{item.description}</p>
							<span className="shop__price">{item.price}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Shop;
