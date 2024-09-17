import { createContext, useContext, useReducer} from "react";
// import { faker } from "faker";
import { cartReducer, productReducer } from "./Reducer";
import mockProducts from '../mock-json/product';

const Cart = createContext();


const Context = ({ children }) => {
    
    const mockData = mockProducts;    
    const products = mockData.products.map((prod) => ({
        // id: faker.datatype.uuid(),
        // name: faker.commerce.productName(),
        // price: faker.commerce.price(),
        // image: faker.random.image(),
        // inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        // fastDelivery: faker.datatype.boolean(),
        // ratings: faker.random.arrayElement([1, 2, 3, 4, 5])

        id: prod.id,
        name: prod.name,
        price: prod.price,
        image: prod.images[0],
        inStock: prod.inStock,
        fastDelivery: prod.fastDelivery,
        rating: prod.ratings[2],
        quantity:prod.quantity,
    }));
    // console.log(JSON.stringify(products));
    const [state,dispatch] = useReducer(cartReducer,{
        products: products,
        cart: []
    }) 
    const [productState,productDispatch] = useReducer(productReducer, {
        byStock:false,
        byFastDelivery:false,
        byRating:0,
        searchQuery:""
    })
    return (<Cart.Provider value = {{state,dispatch,productState,productDispatch}}>{children}</Cart.Provider>)
}


export const CartState = () => {
    return useContext(Cart);
}


export default Context;



