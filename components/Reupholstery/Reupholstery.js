import "./Reupholstery.css";

import Title from "@/components/ui/Title/Title";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Reupholstery = () => {

	const { header, button } = {
		header: {
			title: 'Перетяжка мебели',
			badge: 'Услуга',
			position: 'left',
			description: 'Подарим вашей мебели вторую жизнь. Вернем любимым креслам и диванам свежий вид: обновим обивку, сохраним форму и комфорт.'
		},

		button: {
			name: 'Узнать подробнее',
			url: '#about'
		}
	}

	return (
		<section className="reupholstery">
			<div className="reupholstery__inner">
				<div className="reupholstery__left">
					<Title title={header.title} badge={header.badge} position={header.position} />
					<p className="reupholstery__description">{header.description}</p>
					<Link className="reupholstery__button" href={button.url}>
						<span>{button.name}</span>
						<ArrowUpRightIcon className="hero__icon" aria-hidden="true" />
					</Link>
				</div>
				<div className="reupholstery__right">
					<Image src="/images/reupholstery/reupholstery.webp" width={600} height={300} alt={header.title} />
				</div>
			</div>
		</section>
	);
}

export default Reupholstery;