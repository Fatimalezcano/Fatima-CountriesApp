
const initialState = {
     countries : [],
     country: {},
     filtered: false,
}

export default function rootReducer(state = initialState, action) {
    //action para obtener todos los paises
    if(action.type === 'GET_COUNTRIES'){
        return{
            ...state,
            countries: action.payload
        }
    };

    //action para obtener un pais
    if(action.type === 'GET_COUNTRY'){
        return{
            ...state,
            countries: action.payload
        }
    };

    //action para filtrar por continente
    if(action.type === 'GET_CONTINENT') {
        return {
            ...state,
            countries: action.payload,
            filtered: true
        }
    };

    //action para filtrar por continente
    if(action.type === 'GET_ACTIVITY'){
        return{
            ...state,
            countries: action.payload,
            filtered: true
        }
    };

    //action para ordenamiento ASC DESC
    if(action.type === 'GET_ORDERING_ALF') {
        return{
            ...state,
            countries: action.payload,
            filtered: true
        }
    };

     //action para ordenamiento por poblacion
    if(action.type === 'GET_ORDERING_NUM') {
        return{
            ...state,
            countries: action.payload,
            filtered: true
        }
    };

    // action ruta detalle
    if(action.type === 'GET_DETAIL'){
        return{
            ...state,
            country: action.payload
        }
    };

    //area
    // if(action.type === 'GET_ORDERING_AREA') {
    //     return{
    //         ...state,
    //         countries: action.payload,
    //         filtered: true
    //     }
    // };


    return state;
}