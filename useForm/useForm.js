import { useState } from "react"


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => setValues(initialState);

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        }); //Aqui lo que hacemos es que se le asignamos el valor del input del evento, al name del input del evento que tenemos aqui
         
    }

    return [ values, handleInputChange, reset ];

}
