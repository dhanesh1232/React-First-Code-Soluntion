const element = (
  //   Write your code here.
  <div className="bgColor">
    <h1 className="headPage">Super Over League</h1>
    <div className="imgContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="imgSizing"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="imgSizing"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
