import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';

import AppComponent from './components/App';
import HomeComponent from './components/Home';
import UpdateComponent from './components/Update';

function App() {
  return (
    <div className="Appa">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponent></HomeComponent>}/>
          <Route path='/add-restarent' element={<AppComponent></AppComponent>}/>
          <Route path='/update/:id/' element={<UpdateComponent></UpdateComponent>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
