import {useParams} from "react-router-dom";
import {Fragment, useContext, useEffect, useState} from "react";
import {CategoriesContext} from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import {CategoryTitle,CategoryTypeContainer} from "./category.styles";

const Category=()=>{
    const {category}=useParams();
    const {categoriesMap}=useContext(CategoriesContext);
    const [products,setProducts] = useState(categoriesMap[category])

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap])


    return(
        <Fragment>
        <CategoryTitle className={'category-title'}>{category}</CategoryTitle>
        <CategoryTypeContainer>
            {

                products && products.map((product)=>
                    <ProductCard key={product.id} product={product}/>
                )
            }
        </CategoryTypeContainer>
        </Fragment>
    )

}
export default Category;