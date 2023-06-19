import { createContext, useState } from 'react';
export const cartContext = createContext(1);
const { Provider } = cartContext

function MyProvider({children}){
    const [cart, setCart] = useState()

    return (
        <Provider value={{cart}}>
            {children}
        </Provider>
    )
}

export default MyProvider