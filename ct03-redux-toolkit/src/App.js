import logo from './logo.svg';
import './App.css';
import { useSelector } from 'redux'

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
