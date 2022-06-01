import Form from "./containers/Form/Form";
import "./App.css";
import { GlobalDataProvider } from "./components/GlobalDataContext/GlobalDataContext";

function App() {
  return (
    <GlobalDataProvider>
      <div className="app">
        <Form />
      </div>
    </GlobalDataProvider>
  );
}

export default App;
