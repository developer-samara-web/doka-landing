import Header from "@/components/Header/Header";
import Categories from "@/components/Categories/Categories";
import Hero from "@/components/Hero/Hero";

const Home = () => {
	return (
		<main id="main-content" className="wrapper">
			<Header />
			<Categories />
			<Hero />
		</main>
	);
}

export default Home;
