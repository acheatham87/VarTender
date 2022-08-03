import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from 'reactstrap';
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";
import { onLoginStatusChange } from "./modules/authManager";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    onLoginStatusChange(setIsLoggedIn);
  }, []);

  if (isLoggedIn === null) {
    return <Spinner className="app-spinner dark" />;
  }

  return (
    <div className='bgImg' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/images/BarBackgroundEdit1.jpg`})`}}>
    <Router>
      <Header isLoggedIn={isLoggedIn}/>
      <ApplicationViews isLoggedIn={isLoggedIn}/>
    </Router>
    </div>
  );
}

export default App;
