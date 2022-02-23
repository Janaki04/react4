import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Component/Home';
import Student from './Component/Student';
import Contact from './Component/Contact';
import Header from './Component/Header';
import Error from './Component/Error';
import { StudentProvider } from './Component/StudentContext';
import AddStudent from './Component/AddStudent';
import EditStudent from './Component/EditStudent';


function App() {
  return (
    <div className="App">
      <StudentProvider>
     <Router>
       <Header/>
       <Routes>
         <Route path="/home" element={<Home/>}/>
         <Route path="/student" element={<Student/>}/>
         <Route path="/edit-student/:studentId" element={  <EditStudent/> }/>
         <Route path="/add-student" element={ <AddStudent/> }/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/*" element={<Error/>}/>
         </Routes>
       </Router> 
       </StudentProvider>
    </div>
  );
}

export default App;
