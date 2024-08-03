import Full from "./components/category/full"

import Home from "./components/home"
import {Route ,Switch} from 'react-router-dom'
import Library from "./components/library"


import Detail from "./components/detail"
import Result from "./components/searchresult"
import Generator from "./components/bookgenarator"



function App() {
  

  return (
    <>
    
    <Switch>
      
      
      <Route exact path="/"><Home/></Route>
      <Route path="/category"><Full/></Route>
    
      <Route path="/detail/:id"><Detail/></Route> 
      <Route path="/library"><Library/></Route>
      <Route path="/search"><Result/></Route>
      <Route path="/random"><Generator/></Route>
    </Switch>
    
    

     
    </>
  )
}

export default App
