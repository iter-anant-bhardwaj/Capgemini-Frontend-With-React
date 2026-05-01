import Component3 from "./Component3";

const Component2 = (props1) => {
    console.log(props1);
    // console.log(Object.isFrozen(props1));
    return (
        <>
        {/* <h2>Component 2</h2> */}
        {/* <Component3 info={props1}/> */}



        <h2>This is Component2 Count:{props1.num.count}</h2>
        <button onClick={()=>{
            // props1.setNum({count:count.num+1})
            props1.setNum(prev=>({...prev, count:props1.num.count+1}))
        }}>Increment</button>

        </>
    )
}

export default Component2;