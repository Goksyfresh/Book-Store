import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";


function App() {
  

  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/books/create" element={<CreateBook/>}/>
    <Route path="/books/:id" element={<ShowBook/>}/>
    <Route path="/books/edit/:id" element={<EditBook/>}/>




    </Routes>
  )
}

export default App
