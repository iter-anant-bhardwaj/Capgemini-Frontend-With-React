import { Fragment, useEffect, useState } from "react";

const ApiCalling = () => {
    // ! UseEffect is a hook that we use to handle the sideEffects(Asynchronous Process)
    // ? It will accept 2 parameters. First is callback function, and second one is Dependency array(Array)
    // useEffect(()=>{()},[]) is similar to constructor
    let [apiData, setApiData] = useState([])
    useEffect(()=>{
        (async() => {
            let res = await fetch("https://api.github.com/users")
            console.log(res);
            let data = await res.json();
            console.log(data);
            setApiData([...data])
            
        })()
    },[])
    return(
        <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
            {apiData.map(v=>(
                <Fragment key={v.id}>
                    <div>
                        <p><b>{v.id}</b><b>{v.login}</b></p>
                        <img src={`${v.avatar_url}`} height="200px" alt={`${v.login}`} />
                    </div>
                </Fragment>
            ))}
        </div>
    )
}

export default ApiCalling