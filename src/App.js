import React from "react";
import Tweets from "./views/Tweets"
import AppLayout from "./layout"
import {BrowserRouter,Switch,Route} from "react-router-dom"
const App =()=>{
    return (
        <BrowserRouter>
        <Switch>
        <AppLayout>
            <Route path="/handle/:name" component={Tweets} />
            <Tweets/>
        </AppLayout>
        </Switch>
        
       
        </BrowserRouter>
    )
};

export default App;