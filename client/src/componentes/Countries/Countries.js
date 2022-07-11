import React from "react";
import Country from "../Country/Country";



export default function Countries(props) {

    // useEffect(() => {
    //     props.getCountries();
    // }, [])

    return (
        <>
        {
           props.countries.length > 1 && props.countries.map(e => <Country 
                id={e.id}
                bandera={e.bandera} 
                nombre={e.nombre} 
                continente={e.continente}/>)
        }
        </>
    )
}

function mapStateToProps(state){
    return{
      countries: state.countries
    }
}

// export default connect(mapStateToProps)(Countries)