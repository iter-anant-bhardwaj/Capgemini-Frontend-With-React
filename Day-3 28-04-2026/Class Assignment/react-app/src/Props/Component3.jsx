const Component3 = (props) => {
    console.log(props);
    // console.log(Object.isFrozen(props));
    // console.log(props.info.info.class);
    let {num, setNum} = props.currentNum;
    return (
        <>
        {/* <h2>Component 3</h2> */}
        <h2>This is Component3 Count:{num.count}</h2>
        <button onClick={()=>{
            // setNum(num+1)
            setNum(prev=>({...prev, count:num.count-1}))
        }}>Decrement</button>
        </>
    )
}

export default Component3;