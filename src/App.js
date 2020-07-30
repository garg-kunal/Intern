import React from 'react';
import './App.css';
import Intern from './student Intern/components/Internships';
import Form from './form/form';
import Screen1 from "./student Intern/components/Screen1";
import Screen2 from "./student Intern/components/Screen2";
import Screen3 from "./student Intern/components/Screen3";
import Screen4 from "./student Intern/components/Screen4";
import InternshipsData from './student Intern/components/internshipsData';
import CityPrefs from './student Intern/components/CityPrefs';
import Quiz from './components/quiz';
import Navbar from './components/navbar'
import Top from './components/top';
import Dashobard from './student Intern/components/ApplicationDashboard'
import Question from './student Intern/components/Question';
function App() {
  return (
    <div>
      <Navbar/>
      {/* <Form/>
      <Question/> */}
      <Intern/>
   {/* <Dashobard/> */}
        {/* <Screen1/> */}
       {/* <Screen2/>  */}
       {/* <Screen3/><InternshipsData/>  */}
      {/* <CityPrefs/>   */}
     {/* <Form/>  */}
    </div>
  );
}

export default App;
