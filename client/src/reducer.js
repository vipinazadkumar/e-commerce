export const initialState ={
    basket: [],
    user: null,
    address:{}
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);


const reducer =(state,action)=>{
   console.log("action >>>>",action);

   switch(action.type){
    case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket,action.item],
        };

    case "SET_ADDRESS":
        return {
          ...state,
          address:{...action.item},
        };
    
    case 'REMOVE_FROM_BASKET':

        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];

        if(index >=0){
            newBasket.slice(index,1);
        }else{
            console.warn(`
                can't remove remove product whose id is ${index}
                `);
        }
        return {
            ...state,
            basket: newBasket
        };
    case "SET_USER":
        return state;    


    default:
        return  state;
    }
};

export default reducer;