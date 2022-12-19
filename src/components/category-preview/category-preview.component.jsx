import { Link } from 'react-router-dom'

import ProductCard from '../product-card/product-card.component.jsx'

import { CategoryPreviewContainer, Title, Preview} from './category-preview.styles'

const CategoryPreview = ({name, products}) => {
     return (
          <CategoryPreviewContainer>
               <h2>
                    <Title to={name}>{name}</Title>
               </h2>
               <Preview>
                    {products
                         .filter((_, idx) => idx < 4)
                         .map(product => 
                              <ProductCard key={product.id} product={product} />)}
               </Preview>
          </CategoryPreviewContainer>
     )
}

export default CategoryPreview