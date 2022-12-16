import { useContext } from "react"

import { CategoriesContext } from "../../contexts/categories.context"

import ProductCard from "../../components/product-card/product-card.component"
import CategoryPreview from "../../components/category-preview/category-preview.component"

import './shop.styles.scss'

const Shop = () => {
     const {categoriesMap} = useContext(CategoriesContext)
     
     return (
          <div className="shop-container">
               {Object.keys(categoriesMap).map(title => (
                    <CategoryPreview key={title} name={title} products={categoriesMap[title]} />
               ))}
          </div>
     )
}

export default Shop