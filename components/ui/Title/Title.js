import "@/components/ui/Title/Title.css";

const Title = ({ title, badge, position, style, id }) => {
	return (
		<div className={`section__heading ${position ? `section__heading--${position}` : ""}`}>
			<h2 id={id} className={`section__title ${style ?? ""}`}>{title}</h2>
			<div className={`section__line ${position ? `section__line--${position}` : ""}`}></div>
			<p className="section__badge">{badge}</p>
		</div>
	);
}

export default Title;
