import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Profile from './Pages/Profile';
import CheckAcc from './Pages/CheckAcc';
import Login from './Pages/Login';


function App() {
  const [isAuth,setisAuth] = useState(false);
  return (
    <div className="App">
       <Router>
          <Route path="/" exact>
              <button onClick={()=>{setisAuth(true)}}>Login</button>
              <button onClick={()=>{setisAuth(false)}}>Logout</button>
              <Link to="/profile">Go to profile</Link> <br/>
              <Link to="/checkacc">Go to your account</Link>
               
          </Route> 
          <Route path="/login" > <Login /> </Route>

          <ProtectedRoute path="/profile" Component={Profile} isAuth={isAuth} />
          <ProtectedRoute path="/checkacc" Component={CheckAcc} isAuth={isAuth} />
       </Router>
    </div>
  );
}

export default App;
