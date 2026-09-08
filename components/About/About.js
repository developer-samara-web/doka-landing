import "./About.css";

import Title from "@/components/ui/Title/Title";
import Image from "next/image";

const About = () => {

	const { header } = {
		header: {
			title: "Мы создаём мебель, которая объединяет стиль, комфорт и качество — чтобы каждый дом становился местом для жизни",
			badge: "Немного о нас",
			position: "center",
			style: "about__title",
			description: "Мы создаём качественную мебель, которая гармонично сочетает современный дизайн, практичность и комфорт. Каждая модель продумана до деталей, чтобы сделать ваш интерьер уютнее, функциональнее и выразительнее. Выбирайте мебель, которая подходит именно вам и превращает пространство в настоящий дом.",
		}
	}

	return (
		<section id="about" className="about" aria-labelledby="about-title">
			<div className="about__inner">
				<Title id="about-title" title={header.title} badge={header.badge} position={header.position} style={header.style} />
				<p className="about__description">{header.description}</p>
				<Image className="about__image" src="/images/about/about.webp" alt={header.badge} width={1200} height={600} />
			</div>
		</section>
	);
}

export default About;
