import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter, Route } from 'react-router';

// ***********************************************************************************
// ******************************** Import Other Component ******************************
// ***********************************************************************************
import Header from '/imports/web/Common/Header.jsx';
import Footer from '/imports/web/Common/Footer.jsx';
import Homepage from '/imports/web/Homepage/Homepage.jsx';



// ***********************************************************************************
// ******************************* Component To Render Start *************************
// ***********************************************************************************
class Website extends React.Component{
    render(){
        return(
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}


// ***********************************************************************************
// ************************************ Add Routes ***********************************
// ***********************************************************************************
const routes = () => (
    <BrowserRouter>
            <Route path='/' component = {Homepage} />
    
        <Route component={Website}>
            <Route path='/a' component = {Homepage} />
        </Route>
    </BrowserRouter>
);

export default routes;