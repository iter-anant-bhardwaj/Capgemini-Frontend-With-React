import { useState } from 'react';
import Component2 from './Component2';
import Component3 from './Component3';
function Component1(){
    let [num, setNum] = useState({count:0})
    return(
        <>
        
        {/* <Component2 by="Anant" class={["Ram", "Shyam", "Gopi"]} info={{class : "Class is getting shifted"}}/> */}

        <h1>This is Component1 Count:{num.count}</h1>
        <Component2 {...{num, setNum}}/>
        <Component3 currentNum = {{num, setNum}}/>
        <hr />
        </>
    )
}

export default Component1