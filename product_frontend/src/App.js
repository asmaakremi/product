import './App.css';
import {Router , Route} from "react-router-dom";
import {AddProduct , EditProduct} from "./components/products";
function App() {
  return (
    <>
    <Router>
      <Route exact path="/" component={<Home/>} />
      <Route exact path="/addProduct" component={<AddProduct/>} />
      <Route exact path="/editProduct/:id" component={<EditProduct/>} />
    </Router>
    </>
  );
}

export default App;
