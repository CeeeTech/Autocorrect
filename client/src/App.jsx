import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/pages/Home';
import NavBar from './views/components/Main/navBar';
import NewPage from './views/pages/NewPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-page' element={<NewPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
