import './categories.styles.scss'
import CategoryItem from './../catigory-item/category-item-component'

const Directory = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;