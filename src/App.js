import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';

import AppComponent from './components/App';
import HomeComponent from './components/Home';

function App() {
  return (
    <div className="Appa">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponent></HomeComponent>}/>
          <Route path='/add-restarent' element={<AppComponent></AppComponent>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
