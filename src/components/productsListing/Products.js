import { useQuery } from "react-query";
import Product from './Product';
import Loader from "../icons/Loader";
import PageHeader from '../PageHeader';

const getProducts = async () => 
    await (await fetch("https://fakestoreapi.com/products/")).json();

const Products = ({ handleAddItemToCart, history }) => {
    const { isLoading, error, data } = useQuery("products", getProducts);
    
    if (isLoading) return <Loader/>;
    if (error) return error.message;

    return (

        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <PageHeader menu="Products" controls={true}/>
            {data.map(product => (
                <Product key={product.id} product={product} handleAddItemToCart={handleAddItemToCart} history={history}/>
            ))}
        </div>
        
    );
}

export default Products;