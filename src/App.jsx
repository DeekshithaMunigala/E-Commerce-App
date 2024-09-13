import { Provider } from "react-redux";
import Products from "./utils/constants";
import appStrore from "./utils/store/appStore";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Provider store={appStrore}>
        <Header />
        <Products />
      </Provider>
    </>
  );
};

export default App;
