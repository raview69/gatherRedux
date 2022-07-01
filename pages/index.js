import Cart from "../components/Cart/Cart";
import Layout from "../components/Layout/Layout";
import Products from "../components/Shop/Products";
import { useSelector } from "react-redux";

const Index = () => {
	const showCart = useSelector((state) => state.ui.cartView);
	return (
		<Layout>
			{showCart && <Cart />}
			<Products />
		</Layout>
	);
};

export default Index;
