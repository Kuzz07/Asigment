import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigationbar from '../components/Layout/Header/Navigationbar';
import Login from '../components/Layout/Body/Login';
import AdminLogin from '../components/Layout/Adminpannel/Adminlogin';
import Register from '../components/Layout/Body/Register';
import HomePage from '../components/Pages/HomePage';
import Footer from '../components/Layout/Footer/Footer';
import BlogsPage from '../components/Pages/BlogsPage';
import AboutPage from '../components/Pages/AboutPage';
import OffersPage from '../components/Pages/Offerspage';

import Addproduct from '../components/Layout/Adminpannel/Addproduct';
import Showallproduct from '../components/Layout/Adminpannel/Showallproduct';
import showallcontact from '../components/Layout/Adminpannel/showallcontact';



import showMyBookings from '../components/Pages/showMyBookings';
import showMyCarts from '../components/Pages/showMyCart';
import ContactPage from '../components/Pages/ContactPage';


import { withRouter } from 'react-router-dom';
import DashboardCharts from '../components/Layout/Adminpannel/Adminpannel';
import Addpackages from '../components/Layout/Adminpannel/Addpackages';

import Showallpackages from '../components/Layout/Adminpannel/Showallpackages';
import Editpackages from '../components/Layout/Adminpannel/Editpackages';
import Editproduct from '../components/Layout/Adminpannel/Editproduct';
import UserProfile from '../components/Pages/Profile';
import updateprofile from '../components/Pages/updateprofile';



const Routes = ({ location }) => {

    const checkRoute = () => {

        const splitLocation = location.pathname.split("/")
        if (splitLocation.length > 1) {
            if (splitLocation[1] === "admin") {
                return true;
            }
        }

        return false;
    }


    return (
        <>
            {  checkRoute()}
            {!checkRoute() && <Navigationbar />}
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={Login} />
                
                <Route path="/register" component={Register} />
                <Route path="/blog" component={BlogsPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/offers" component={OffersPage} />
                <Route path="/contact" component={ContactPage} />

                
                <Route path="/contact" component={ContactPage} />
                <Route path="/addpackages" component={Addpackages} />
                <Route path="/addproduct" component={Addproduct} />
                <Route path="/showallpackages" component={Showallpackages} />
                <Route path="/showallcontact" component={showallcontact} />
                <Route path="/showallproduct" component={Showallproduct} />
                <Route path="/showMyBookings" component={showMyBookings} />
                <Route path="/showMyCarts" component={showMyCarts}/>
                <Route path="/addpackage" component={Addpackages} />
                <Route path="/Editpackages/:id" component={Editpackages} />
                <Route path="/Editproduct/:id" component={Editproduct} />
                <Route component={UserProfile} path="/profile" />
                <Route component={updateprofile} path="/updateprofile/:id" />




                {/* For Admin */}
                <Route path="/admin/" render={({ location, history }) => (
                    <main id="wrapper" className="wrapper">

                        <Route path="/admin/" exact component={AdminLogin} />
                        <Route path="/admin/dashboard" component={DashboardCharts} />


                    </main>
                )} />
            </Switch>
            {  checkRoute()}
            {!checkRoute() && <Footer />}
        </>
    )
}

export default withRouter(Routes);
