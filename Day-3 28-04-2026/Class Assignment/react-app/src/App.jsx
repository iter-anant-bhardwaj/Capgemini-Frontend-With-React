import { useState } from 'react'
import ClassBased from './classBased'
import ClassBased2 from './classBased2'
import FunctionBased from './FunctionBased'
import ArrowFunction from './FunctionBased2';
import ConditionalRendering from './ConditionalRendering';
import ControlledForm from './ControlledForm';
import Component1 from './Props/Component1';
import ApiCalling from './UseEffectComponent/ApiCalling';
import ComponentWithDependency from './ComponentLifeCycleFunction/ComponentWithDependency';
import ComponentCleanUp from './ComponentLifeCycleFunction/ComponentCleanUp';
import ComponentWithRender from './ComponentLifeCycleFunction/ComponentWithRender';
import ComponentConstructor from './ComponentLifeCycleFunction/ComponentConstructor';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h2>This is h2 tag</h2> */}

      {/* <ClassBased/> It is Stateful.*/}

      {/* { (new ClassBased()).render()}   This will not automatically updated we need to reload it.*/}
      
      {/* <ClassBased2/> */}
      
      {/* {(()=>{
        return <h2>This is Function Based Component.</h2>
      })()} */}

      {/* <FunctionBased/> */}

      {/* <ArrowFunction/> */}
      {/* Hooks are the predefined functions that we use to make function based component(stateLess) as stateFull */}

      {/* <ConditionalRendering/>

      <ControlledForm/> */}




      {/* <Component1/> */}








      {/* <ApiCalling/> */}






        {count}
        <button onClick={()=>{
          setCount(count+1)
        }}>Increment</button>
      
      <ComponentConstructor/>

      {/* <ComponentWithRender/> */}

      {/* <ComponentWithDependency/> */}


      {/* {!(count%5 == 0) && <ComponentCleanUp/>} */}
    </>
  )
}

export default App
