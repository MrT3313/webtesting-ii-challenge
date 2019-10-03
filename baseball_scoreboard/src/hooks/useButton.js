// - IMPORTS - //
import {useState} from react

// - CUSTOM HOOK - //
const useButton = () => {
    const [value, setValue] = useState(undefined)
    // -*- //
    console.log(value)
    // -*- //
value, setValue
}

// - EXPORTS - //
export default useButton