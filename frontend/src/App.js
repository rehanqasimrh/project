import { useState } from 'react';
import './App.css';
import Sidebar from './Dropmenu/Sidebar';
import Nav from './Navigations/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import products from './db/data';//Database
import Category from './Dropmenu/Category/Category';
import Card from './components/Card';

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("")
  //input filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const filtereditems = products.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase() !== -1))

  //radio
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  //buttons
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filtereditems
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) =>
    (<Card
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
    />));
  }
  const result = filteredData(products, selectedCategory, query)
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>

  );
}

export default App;
