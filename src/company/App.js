import React from 'react';

import Companynav from "./components/companyNavBar"
// import ProfileBox from "./components/profileBox"
import Postintern from './components/postInternship';
import Dashboard from './components/companyDashboard';
import Viewintern from "./components/viewInternship"
import Saveintern from "./components/saveInternship"
import Reviewintern from "./components/reviewScreen"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
    return (
        <div>

            <Route component={Companynav} path="/company" />
            <Route component={Viewintern} path="/company/view_internship" exact />
            <Route component={Postintern} path="/company/post_intern" exact/>
            <Route component={Reviewintern} path="/company/review_intern" exact />
            <Route component={Saveintern} path="/company/intern/save_intern" exact />
            <Route component={Dashboard} path="/company/dashboard" exact />

        </div>
    )
}


export default App;
