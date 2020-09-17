import React, { useState, useEffect, Suspense } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Form from './student Intern/form/form';
import Intern from './student Intern/components/Internships';
import Postintern from './company/components/postInternship';
import Companynav from './company/components/companyNavBar';
import Viewintern from './company/components/viewInternship';
import Dashboard from './company/components/companyDashboard';
import Quiz from './student Intern/quiz/quiz';
import Admin from './admin/main';
import Admincom from './admin/company';
import Adminintern from './admin/inetrns';
import Terms from './auth+home/terms';
import SkillSet from './student Intern/components/skillset';
import Studentregister from './auth+home/accounts/StudentRegister';
import Saveintern from './company/components/saveInternship';
import Reviewintern from './company/components/reviewScreen';
import Internships from './student Intern/components/Internships';
import Screen2 from './student Intern/components/Screen2';
import Screen3 from './student Intern/components/Screen3';
import Screen4 from './student Intern/components/Screen4';
import Studentdashboard from './student Intern/components/ApplicationDashboard';
import Cityprefs from './student Intern/components/CityPrefs';
import Instructions from './student Intern/components/Instructions';
import Questions from './student Intern/components/Question';
import Interndata from './student Intern/components/internshipsData';
import Applyintern from './student Intern/components/Applyintern';
import Company from './company/App';
import Home from './auth+home/home';
import Thanku from './auth+home/ThankYou';
import Companyregister from './auth+home/accounts/CompanyRegister';
import verifyotp from './auth+home/VerifyOTP';
import verify from './auth+home/verifyCompany';
import Studentlogin from './auth+home/accounts/StudentLogin';
import Companylogin from './auth+home/accounts/CompanyLogin';
import Companydetail from './auth+home/accounts/companydetails';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Savecompany from './auth+home/Savecompany';
import ViewResume from './student Intern/form/viewResume';
import comOtp from './auth+home/comOtp';
import ViewIntern from './student Intern/components/viewIntern';
import Adminlogin from './auth+home/accounts/Admin';
import Error404 from './auth+home/accounts/404';
import ViewInternCom from './admin/view_intern';
import Drawer from './student Intern/quiz/Drawer';
import Privacy from './auth+home/policy';
import Event from './event/components/home';
import OuterNavbar from './student Intern/components/outerNavbar';

function Student() {
  return (
    <div>

      <Route path="/student" component={Drawer} />
      <Route component={OuterNavbar} path="/nav" />
      <Route component={Internships} path="/student/internships" exact />
      <Route component={Screen2} path="/nav/test_skills" exact />

      <Route path="/student/resume_form/:bool" component={Form} exact />

      <Route component={Screen3} path="/nav/test_score" exact />
      <Route component={Screen4} path="/student/status" exact />

      <Route component={Studentdashboard} path="/student/dashboard" exact />
      <Route component={Cityprefs} path="/student/city_preference" exact />
      <Route component={Instructions} path="/nav/quiz/instructions" exact />
      <Route component={Quiz} path="/quiz" exact />
      <Route component={Questions} path="/student/intern_questions/:id" exact />
      <Route component={Interndata} path="/nav/intern_data" exact />
      <Route component={Applyintern} path="/student/apply_intern" exact />
      <Route component={ViewResume} path="/resume" exact />
      <Route component={ViewIntern} path="/student/view_intern" exact />
      <Route component={SkillSet} path="/nav/skillset" exact />
      
    </div>
  )
}

function App() {
  useEffect(() => {
    document.getElementById('load').style.display='none';
  }, []);


  return (
    <div>
      <Router >

        <Route component={Studentregister} path="/create_account/student" exact />
        <Route component={Companyregister} path="/create_account/company" exact />
        <Route component={Studentlogin} path="/login/student" exact />
        <Route component={Companylogin} path="/login/company" exact />
        <Route component={Companydetail} path="/create/company_detail/:email" exact />
        <Route component={verifyotp} path="/login/verify_otp/:mobile_number" exact />
        <Route component={verify} path="/login/verify/:email" exact />
        <Route component={Thanku} path="/login/thnku" exact />
        
        <Route component={Home} path="/" exact />
       
        <Route component={Event} path="/devcol" exact />


        <Route component={Savecompany} path="/save_company" exact />
        <Route component={comOtp} path="/verify/:email" exact />
        <Route component={Adminlogin} path="/login/admin" exact />
        <Route component={ViewInternCom} path="/view_intern" exact />
        <Route component={Admincom} path="/admin/companies" exact />
        <Route component={Admin} path="/admin" exact />
        <Route component={Terms} path="/terms" exact />
        <Route component={Privacy} path="/privacy_policy" exact />
        <Route component={Adminintern} path="/admin/internship" exact />
        <Company />
        <Student />
        <Route path='/404' component={Error404} />

      </Router>

    </div>

  );
}






export default App;
