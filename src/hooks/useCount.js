import { useState } from "react"

export const useCount = ( initial = 0, max) =>{
    const [count, setCount] = useState(initial);
    const add = () => {
        if (count === max) {
          return setCount(count);
        }
        setCount(count + 1);
      };
      const substract = () => {
        if (count === 0) {
          return setCount(0);
        }
        setCount(count - 1);
      };
      const reset = () => {
        setCount(initial);
      }
      return{
        count,
        add,
        substract,
        reset,
      }
}