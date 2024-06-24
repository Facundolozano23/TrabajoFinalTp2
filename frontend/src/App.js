
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import GetToys from './screens/GetToys';
import ToyDetails from './screens/ToyDetails';
import CreateToy from './screens/CreateToy';


const App=()=> {
  return (
    <BrowserRouter>
   <Routes>
        <Route exact path='/toy' element={<GetToys />} />
        <Route exact path='/toy/:id' element={<ToyDetails />} />
        <Route exact path='/toy/create' element={<CreateToy />} />
  </Routes>
    </BrowserRouter>
  );
}

export default App;
