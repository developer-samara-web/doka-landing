import "./Hero.css";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Hero = () => {

	const { header } = {
		header: {
			title: "Создайте дом в котором хочется жить",
			badge: "Магазин мебели",
			description: "Большой выбор мебели для дома по доступным ценам. Поможем подобрать диваны, кровати и другую мебель, которая подойдет именно вам.",
		}
	}

	return (
		<section className="hero" aria-labelledby="hero-title">
			<div className="hero__inner">
				<div className="hero__col">
					<div className="hero__row">
						<p className="hero__badge">{header.badge}</p>
						<h1 id="hero-title" className="hero__title">{header.title}</h1>
						<p className="hero__description">{header.description}</p>
					</div>
					<Link className="hero__button" href="#about">
						<span>Узнать подробнее</span>
						<ArrowUpRightIcon className="hero__icon" aria-hidden="true" />
					</Link>
				</div>
				<div className="hero__col">
					<Image className="hero__image" src="/images/hero/hero.webp" width={1000} height={1000} alt={header.badge} priority />
				</div>
			</div>
		</section>
	);
}

export default Hero;
