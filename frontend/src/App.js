
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import GetToys from './screens/GetToys';
import ToyDetails from './screens/ToyDetails';
import CreateToy from './screens/CreateToy';
import EditToy from './screens/EditToy'
import NavBar from'./components/NavBar'
import Footer from './components/Footer';





const App=()=> {
  return (
 <BrowserRouter>
 <NavBar/>
   <Routes>
        <Route exact path='/toy' element={<GetToys />} />
        <Route exact path='/toy/:id' element={<ToyDetails />} />
        <Route exact path='/toy/create' element={<CreateToy />} />
        <Route exact path='/toy/edit/:id' element={<EditToy />} />
  </Routes>
  <Footer />
    </BrowserRouter>
  );
}

export default App;
