import React from 'react'
import './categories.styles.scss'
import CategoryItem from './components/catigory-item/category-item-component';
import {categories} from './directory/categories';

const App = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default App;
