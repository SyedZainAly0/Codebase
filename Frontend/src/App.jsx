import { useState } from 'react'
import { Mycomponent as First, Mycomponent1 as Second } from './FunctionComponent' // using named Import
import Normalcomponent from './FunctionComponent' // using Default Import
import { Properties as Data } from './Props'
import Propsdestructuring from './Props'
import States from './States'
import Icon from './Routing'
import Timer from './useEffect'
import Maincomponent from './NestedComponent'
import Defaultprops from './DefaultProp'
import Childrenprop from './ChildrenProps'
import TextInputWithFocusButton from './useRef'
import App1 from './FunctionProp'

function App() {
  return (
    <>

    {/* <First/> */}

    {/* <Second/> */}

    {/* <Normalcomponent/> */}

    {/* <Data Props={{name:"XYZ", course:"React-FastAPI"}} /> */}

    {/* <Propsdestructuring name="ABC" course="Django-Python" time="Evening" value={`value is: 4`}/>    */}

    {/* <States/> */}

    {/* <Icon/> */}

    {/* <Timer/> */}

    {/* <Maincomponent/> */}

    {/* <Defaultprops/> */}

    {/* <Defaultprops name="Ali"/> */}

    {/* <Childrenprop>
      <h2>Thi<App1/>s is from parent component</h2>
      <button>click Me</button>
    </Childrenprop> */}

    {/* <TextInputWithFocusButton/> */}

     {/* <App1/> */}
   
    </>
  )

}

export default App
