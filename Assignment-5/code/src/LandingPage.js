import "./App.css";
const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="img">
        <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg" alt="Cover" />
      </div>
      <div className="conatiner1">
        <h1>My Instagram Page </h1>
        <button className="submit1" type="submit"> 
            {/* <a href="http://localhost:3004/"> */}
            <a className="anchor" href="http://localhost:3000/" >Enter</a>
        </button>
       
      </div>
    </div>
  );
};
export default LandingPage;