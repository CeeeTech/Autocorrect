import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home';
import NavBar from './views/components/navBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
        </Routes>
            
        </div>
    </BrowserRouter>
  );
}

export default App;
