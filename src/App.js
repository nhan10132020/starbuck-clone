import { BrowserRouter as Router,Routes,Route, Navigate  } from 'react-router-dom';
import Home from './pages/Home';
import './index.css'
import Login from './pages/Login';
import { useUserProvider } from './context/UserProvider';
import SignUp from './pages/SignUp';
import MenuScreen from './pages/MenuScreen';
import FeaturedScreen from './pages/FeaturedScreen';
import ItemScreen from './pages/ItemScreen';

function App() {
  const {user} = useUserProvider()
  return (
    <div className="App overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/account/signin" element={user?<Navigate to="/menu/"/>:<Login/>}/>
          <Route path="/account/create" element={user?<Navigate to="/menu/"/>:<SignUp/>}/>
          <Route path="/menu" element={!user?<Navigate to="/account/signin"/>:<MenuScreen/>}/>
          <Route path="/menu/featured" element={!user?<Navigate to="/account/signin"/>:<FeaturedScreen/>}/>
          <Route path="/menu/:type/:name/:id" element={<ItemScreen/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
