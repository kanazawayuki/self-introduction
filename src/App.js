import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Skill from './components/Skill/Skill';
import History from  './components/History/History'
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Skill />
      <History />
      <Contact />
    </div>
  );
}

export default App;
