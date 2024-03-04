import { Header } from "./components/Header";
import { Orders } from "./components/Orders/index";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Orders />
    </div>
  );
}

export default App;
