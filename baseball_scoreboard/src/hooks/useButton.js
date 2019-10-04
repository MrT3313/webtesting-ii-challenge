// - IMPORTS - //
import {useState} from 'react'

// - CUSTOM HOOK - //
const useButton = (key, initialValue) => {
    const [value, setValue] = useState(parseInt(initialValue))
    // console.log('-*- useButton hookState -*-',value)
    console.log('-- * --',key)
    // -- * -- //
        let updatedValue = undefined
    // -- * -- //

        // if(key === 'strike') {
        //     if (value < 2) {
        //         updatedValue = value + 1 
        //     } else {
        //         updatedValue = 0
        //     }
        // } 
        // if(key === 'foul') {
        //     if (value < 2) {
        //         updatedValue = value + 1 
        //     } else {
        //         updatedValue = value
        //     }
        // } 
        // if(key === 'ball') {
        //     if (value < 3) {
        //         updatedValue = value + 1 
        //     } else {
        //         updatedValue = 0
        //     }
        // } 
        
    // -- * -- //
    const handleChanges = buttonType => {
        console.log('!!! UPDATED VALUE !!!', updatedValue)
        console.log('!!! buttonType !!!', buttonType)
        // -- * -- //
            switch (buttonType) {
                case 'strike':
                    if (value < 2) {
                        updatedValue = value + 1
                    } else {
                        updatedValue = 0
                    }
                    break;
                case 'foul':
                    if (value < 2) {
                        updatedValue = value + 1
                    } else if (value === 2) {
                        updatedValue = 2
                    } else {
                        alert('error')    
                    }
                    break;
                case 'ball':
                    if (value < 3) {
                        updatedValue = value + 1
                    } else {
                        updatedValue = 0
                    }
                    break;
                default:
                    alert('error')
                    break;
            }

        // -- * -- //
        setValue(updatedValue)
    }
return [value, handleChanges, setValue]
}


// - EXPORTS - //
export default useButton