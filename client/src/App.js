import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import Navbar from './components/Navbar';
import AddProduct from './views/AddProduct';
import AddCategory from './views/AddCategory';
import DisplayCategories from './views/DisplayCategories';
function App() {
  return (
    <div className="App">
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addproduct' element={<AddProduct />} />
      <Route path='/addcategory' element={<AddCategory />} />
      <Route path='/display' element={<DisplayCategories />} />

    </Routes>
  </Router>
    </div>
  );
}

export default App;
