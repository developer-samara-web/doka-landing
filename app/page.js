import Header from "@/components/Header/Header";
import Categories from "@/components/Categories/Categories";
import Hero from "@/components/Hero/Hero";
import Advantages from "@/components/Advantages/Advantages";
import Shop from "@/components/Shop/Shop";
import Partners from "@/components/Partners/Partners";
import About from "@/components/About/About";
import Reviews from "@/components/Reviews/Reviews";
import Reupholstery from "@/components/Reupholstery/Reupholstery";
import Footer from "@/components/Footer/Footer";

const Home = () => {
	return (
		<main id="main-content" className="wrapper">
			<Header />
			<Categories />
			<Hero />
			<Advantages />
			<Shop />
			<Partners />
			<About />
			<Reviews />
			<Reupholstery />
			<Footer />
		</main>
	);
}

export default Home;
