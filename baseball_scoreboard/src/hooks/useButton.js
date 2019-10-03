// - IMPORTS - //
import {useState} from 'react'

// - CUSTOM HOOK - //
// const useButton = (key, initialValue) => {
const useButton = (key, initialValue) => {
    console.log('INSIDE USE BUTTON')
    console.log('DATA PASSED TO useButton', key, initialValue)
    // -*- //
    const [value, setValue] = useState(parseInt(initialValue))
    console.log(value)
    // console.log(typeof value)

    let updatedValue = value +1 
        console.log(updatedValue)
    
    const handleChanges = e => {
        setValue(updatedValue)
    }
    console.log(value)

return [value, handleChanges, setValue]
}


// - EXPORTS - //
export default useButton