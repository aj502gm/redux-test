import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../components/Home" 
import Results from "../components/Results" 
import Details from "../components/Details" 

const RoutesList = () => (
    <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path = "/results/:pokemon" element = {<Results />}/>
            <Route path = "/resultsDetails" element = {<Details />}/>
        </Routes>
    </BrowserRouter>
)
export default RoutesList;
