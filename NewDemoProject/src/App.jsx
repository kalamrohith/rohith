
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/home"
import Profile from "./pages/profile";
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
         {/* <Route path='/' element={<h3>base page</h3>}/>
          <Route path='*' element={<h1>Error 404 page not found</h1>}/> */}
      </Routes>
    </>
  )
}
export default App
