import "./Advantages.css";

import { GlobeAmericasIcon } from "@heroicons/react/24/outline";

const Advantages = () => {

	const { items } = {
		items: [
			{
				title: 'Качество материалов',
				description: 'Используем надежные материалы и проверенные комплектующие, чтобы мебель служила долго.'
			},
			{
				title: 'Современный дизайн',
				description: 'Подбираем стильные модели, которые легко вписываются в современный интерьер и делают пространство уютнее.'
			},
			{
				title: 'Комфорт и функциональность',
				description: 'Каждая модель сочетает удобство, практичность и продуманную конструкцию для ежедневного использования.'
			},
			{
				title: 'Внимание к деталям',
				description: 'Контролируем качество изготовления, уделяя внимание каждой детали — от фурнитуры до финальной отделки.'
			}
		]
	}

	return (
		<section className="advantages" aria-label="Преимущества Докамебель">
			<div className="advantages__inner">
				<ul className="advantages__items">
					{items.map(({ title, description }) => (
						<li key={title} className="advantages__item">
							<GlobeAmericasIcon className="advantages__icon" aria-hidden="true" />
							<div className="advantages__content">
								<h3 className="advantages__title">{title}</h3>
								<p className="advantages__description">{description}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Advantages;
