import React from 'react';
//import logo from './logo.svg';
import './App.css';
const employee = {
  name: 'Alan Ford',
  Id:'00005152',
  appointment: '9:00(24-05-2016)',
  Email:'pravvesingh@gmail.com',
  Phone: '+31123456789',
  Status: 'In Process',
  Door: 'Mark',
  Date: '10:30(25-05-2016',
  role: 'Boltaart Bosbessen',
  summary: 'I am Boltaart Bosbessen',
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}



var arrow="<"
var arrow1=">"
function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div className='box'>
      <div className='header'>
        <p className='header_arrow'>{arrow}</p>
        <div className='header_name'>
        <p className='name1'>{employee.name}</p>
        <p className='id1'>{employee.Id}</p>
        </div>
      </div>
      <div className='btn'><button className='btn1'>Print</button></div>
      <div className='customer-info'>
        <div className='app'>
          <p className='app1'>Appointment :</p><p className='app2'>{employee.appointment}</p>
        </div>
        <div className='em'>
          <p className='em1'>Email:</p><p className='em2'> {employee.Email}</p>
        </div>
        <div className='Phon'>
          <p className='Phon1'>Phone:</p><p className='Phon2'>{employee.Phone}</p>
        </div>
      </div>
      <div className='order-info'>
      <ul className='ul-cir'><li></li></ul>
        <div className='status'><p className='status1'>Staus</p><p className='status2'>{employee.Status}</p></div>
       
        <div className='door'><p className='door1'>Door</p><p className='door2'>{employee.Door}</p></div>
        <div className='date'><p className='date1'>Time</p><p className='date2'>{employee.Date}</p></div>
      </div>
      <div className='product-list'>
        <div className='square'></div>
        <div className='img' >
        <img className="img1" src={employee.profileImg} alt="imge"></img>
        </div>
        <div className='summ'><p className='rol'>{employee.role}</p><p className='summ1'>{employee.summary}</p></div>
        <p className='arrow1'>{arrow1}</p>
      </div>
    </div>
    </div>
  );
}

export default App;
