import { Switch, Route } from "react-router-dom";
import Adventure from "./adventure";
import Children from "./children";
import Horror from "./horror";
import Romance from "./romance";
import Scifi from "./scifi";
import Header from "../header";


const Full = () => {
    return ( 
        <div className="full">
            <Header/>
            <Switch>
               <Route path="/category/adventure"> <Adventure/></Route>
                <Route path="/category/children"><Children/></Route>
                <Route path="/category/horror"><Horror/></Route>
                <Route path="/category/romance"><Romance/></Route>
                <Route path="/category/scifi"> <Scifi/></Route>
            </Switch>
        </div>
     );
}
 
export default Full;