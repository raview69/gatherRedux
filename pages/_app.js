import { Provider } from "react-redux";
import store from "../store/index";
import "../index.css";

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
