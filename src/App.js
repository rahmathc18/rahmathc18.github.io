
import Home from "./Components/Home";
import Product from "./Components/Product";
import Error from "./Components/Error";

import './Components/styles.css';
import {Route, Routes} from 'react-router-dom';
import ContactPage from "./Components/ContactPage";


function App() {

  return (
 <div>
<Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/Product" element={<Product />} />
  <Route path="/ContactPage" element={<ContactPage />} />
  <Route path="*" element={<Error />} />
</Routes>
 </div>
  );
}

export default App;
