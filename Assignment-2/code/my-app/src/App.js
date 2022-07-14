
import './App.css';



function App(props) {
 const {employee}=props;
 const{name, age, location, bloodGroup, profileImg} = props.employee;
    
return(
  <div className="container">
  {/* Start your React code here */}
  <div className="profile1">
    <img className="img" src={profileImg} alt="imge"></img>
  
  <div className="data">
    <p className="nam">{name}</p>
    <p className="loca">location</p>
    <p className="loca1">{location}</p>
    <p className="Blood">Bloodgroup</p>
    <p className="Blood1">{bloodGroup}</p>
    <p className="Ag">Age</p>
    <p className="Ag1">{age}</p></div>
</div>
</div>
)
}



export default App;
