import './src/App.css';
import { Routes, Route } from 'react-router';

// Import pages
import Layout from './src/components/templates/Layout';
import Home from './src/pages/pageHome/Home';
import Login from './src/pages/pageAuth/Login';
import Register from './src/pages/pageAuth/Register';

// SERVICES
import PrivateRouter from './src/utils/helpers/PrivateRouter';
import PublicRouter from './src/utils/helpers/PublicRouter';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Layout/>}>
    {/* route public */}
  <Route index element={<Home/>} />

  <Route element={<PublicRouter/>}>
  <Route path='/login' element={<Login/>} />
  <Route path='/register' element={<Register/>} />
  </Route>
  </Route>
  </Routes>
  );
}

export default App;

