import "./Categories.css";

import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Categories = () => {

	const { items } = {
		items: [
			{
				name: "Диваны на дачу",
			},
			{
				name: "Диваны-кровати",
			},
			{
				name: "Кровать в спальню",
			},
			{
				name: "Столы на кухню",
			},
			{
				name: "Стулья",
			},
			{
				name: "Шкафы в коридор",
			},
		]
	}

	return (
		<section className="categories">
			<ul className="categories__inner">
				{items.map((item) => (
					<li key={item.name}>
						<Link className="categories__item" href="#shop">
							<ArrowUpRightIcon className="categories__icon" aria-hidden="true" />
							<span className="categories__name">{item.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}

export default Categories;
