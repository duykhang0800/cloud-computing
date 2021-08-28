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

const body = {
  backgroundColor: "grey",
  paddingTop: "100px"
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <div>
        {/* This part of code is for the main page, uncomment it and comment out the active code below to view it */}
        {/* <div>
          <Navbar />
        </div>
        <div class="row" style={body}>
          <div class='column'>
            <PieChart />
          </div>
          <div class="column">
            <BarChart />
          </div>
        </div>
        <div class="row" style={body}>
            <CsvReader />
        </div> */}

        {/* This part of code is for log in and sign up */}
        <Login />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
