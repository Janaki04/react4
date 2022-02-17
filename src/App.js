import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Component/Home';
import Student from './Component/Student';
import Contact from './Component/Contact';
import Header from './Component/Header';
import Error from './Component/Error';

function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Routes>
         <Route path="/home" element={<Home/>}/>
         <Route path="/student" element={<Student/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/*" element={<Error/>}/>
         </Routes>
       </Router> 
    </div>
  );
}

export default App;
