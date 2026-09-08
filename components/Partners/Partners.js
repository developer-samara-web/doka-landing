import "./Partners.css";

import Title from "@/components/ui/Title/Title";
import Image from "next/image";

const Partners = () => {

	const { header, items } = {
		header: {
			title: 'Партнеры',
			badge: 'С нами сотрудничают',
			position: 'center'
		},

		items: [
			{
				image: "/images/partners/partners-1.webp"
			},
			{
				image: "/images/partners/partners-2.webp"
			},
			{
				image: "/images/partners/partners-3.svg"
			},
			{
				image: "/images/partners/partners-4.svg"
			}
		]
	}

	return (
		<section className="partners" aria-labelledby="partners-title">
			<div className="partners__inner">
				<Title id="partners-title" title={header.title} badge={header.badge} position={header.position} />
				<ul className="partners__items">
					{items.map(({ image }) => (
						<li key={image} className="partners__item">
							<Image className="partners__image" src={image} alt="" width={200} height={100} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Partners;
