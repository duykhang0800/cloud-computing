import logo from './logo.svg';
import './App.css';
import CsvReader from './components/CsvReader.jsx';
import PieChart from './components/PieChart.jsx';
import BarChart from './components/BarChart.jsx';
import Navbar from './components/Navbar.jsx'
import './css/Home.css';
import Login from './components/Login'
import Signup from './components/Signup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';

const body = {
  backgroundColor: "grey",
  paddingTop: "100px"
}

function App() {
  return (
    <Router>
      <div>
        {/* This part of code is for the main page, uncomment it and comment out the active code below to view it */}
        {/* <div>
          <Navbar />
        </div>
        <div class="row" style={body}>
          
            <BarChart />
        </div>
        <div class="row" style={body}>
          <PieChart/>
        </div>
        <div class="row">
            <CsvReader />
        </div> */}

        <HomePage/>

        {/* This part of code is for log in and sign up */}
        {/* <Login />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login}/>
        </Switch> */}
      </div>
    </Router>

  );
}

export default App;
