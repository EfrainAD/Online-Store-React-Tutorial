import { useContext } from "react"
import { ProductsContext } from "../../contexts/products.context"

const Shop = () => {
     const {products} = useContext(ProductsContext)
     
     return (
          <div>
               <h1>Shop</h1>
               {products.map(({id, name}) => (
                    <div key={id}>
                         <h2>{ name }</h2>
                    </div>
               ))}
          </div>
     )
}

export default Shop