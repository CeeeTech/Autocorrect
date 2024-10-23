import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/pages/Home';
import NavBar from './views/components/Main/navBar';
import HomeNew from './views/pages/HomeNew';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-page' element={<HomeNew />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
