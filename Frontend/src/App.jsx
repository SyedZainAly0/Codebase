import { useState } from 'react'
import { Mycomponent as First, Mycomponent1 as Second } from './FunctionComponent' // using named Import
import Normalcomponent from './FunctionComponent' // using Default Import
import { Properties as Data } from './Props'
import Propsdestructuring from './Props'
import States from './States'


function App() {
  return (
    <>
    <First/>
    <Second/>
    <Normalcomponent/>

    <Data Props={{name:"XYZ", course:"React-FastAPI"}} />
    <Propsdestructuring name="ABC" course="Django-Python" time="Evening" value={`value is: 4`}/>

    <States/>

    </>
  )

}

export default App
