import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/outline";

const HeaderPanel = () => {
	return (
		<div className="header__panel">
			<button className="header__button" type="button" aria-label="Избранные товары">
				<StarIcon className="header__icon" aria-hidden="true" />
			</button>
			<button className="header__button" type="button" aria-label="Корзина">
				<ShoppingBagIcon className="header__icon" aria-hidden="true" />
			</button>
		</div>
	);
}

export default HeaderPanel;
