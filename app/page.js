import Header from "@/components/Header/Header";
import Categories from "@/components/Categories/Categories";
import Hero from "@/components/Hero/Hero";
import Advantages from "@/components/Advantages/Advantages";
import Shop from "@/components/Shop/Shop";
import Partners from "@/components/Partners/Partners";

const Home = () => {
	return (
		<main id="main-content" className="wrapper">
			<Header />
			<Categories />
			<Hero />
			<Advantages />
			<Shop />
			<Partners />
		</main>
	);
}

export default Home;
