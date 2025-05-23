import './App.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import UserSettings from './Components/UserSettings'
import MinTimer from './Components/MinTimer'
import WorkTimer from './Components/WorkTimer'
import { HashRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    //You can access those components by using react-router-dom
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/UserSettings" element={<UserSettings />} />
          <Route path="/MinTimer" element={<MinTimer />} />
          <Route path="/WorkTimer" element={<WorkTimer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

