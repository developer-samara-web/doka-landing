import "./Reviews.css";

import { ChatBubbleOvalLeftIcon, StarIcon } from "@heroicons/react/24/outline";
import Title from "@/components/ui/Title/Title";
import Image from "next/image";

const Reviews = () => {

	const { header, items } = {
		header: {
			title: "Отзывы",
			badge: "Что о нас говорят",
		},

		items: [
			{
				name: "Анастасия",
				city: "Москва",
				avatar: "/images/reviews/user-1.webp",
				stars: 5,
				title: "«Отличный диван, очень довольны покупкой!»",
				description: "Долго выбирали диван для гостиной и в итоге остановились на этой модели. Выглядит стильно, сидеть очень удобно, качество обивки отличное. Доставили вовремя, всё аккуратно упаковано — спасибо магазину!"
			},
			{
				name: "Дмитрий",
				city: "Санкт-Петербург",
				avatar: "/images/reviews/user-2.webp",
				stars: 5,
				title: "«Кресло идеально вписалось в интерьер»",
				description: "Купили кресло для гостиной — вживую оно оказалось даже красивее, чем на фото. Удобное, мягкое и выглядит действительно качественно. Отдельно порадовала консультация и быстрая доставка. Обязательно будем обращаться ещё!"
			}
		]
	}

	return (
		<section id="reviews" className="reviews" aria-labelledby="reviews-title">
			<div className="reviews__inner">
				<Title id="reviews-title" title={header.title} badge={header.badge} />
				<div className="reviews__items">
					{items.map((item, id) => (
						<article className="reviews__item" key={item.name}>
							<div className="reviews__item-header">
								<div className="reviews__user">
									<Image className="reviews__avatar" src={item.avatar} width={50} height={50} alt={item.name} />
									<div className="reviews__personal">
										<span className="reviews__name">{item.name}</span>
										<span className="reviews__city">{item.city}</span>
									</div>
								</div>
								<ChatBubbleOvalLeftIcon className="reviews__icon" aria-hidden="true" />
							</div>
							<div className="review__content">
								<div className="review__stars">
									{Array.from({ length: item.stars }, (_, index) => <StarIcon className="size-5" key={index} aria-hidden="true" />)}
								</div>
								<div className="reviews__text">
									<h3 className="reviews__title">{item.title}</h3>
									<p className="reviews__description">{item.description}</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Reviews;
