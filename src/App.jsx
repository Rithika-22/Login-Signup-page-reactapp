import "./App.css";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import NavigationBar from './components/NavigationBar/NavigationBar';
const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <LoginSignup />
    </div>
  )
};

export default App;