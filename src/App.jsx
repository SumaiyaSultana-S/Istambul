import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route  } from "react-router-dom";
import './App.css'
import Layout from '../src/componant/root/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contract from './pages/Contract'
import Protfolio from './pages/Protfolio'



function App() {

   let jakononam = createBrowserRouter(createRoutesFromElements(
           <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Protfolio' element={<Protfolio/>}></Route>
            <Route path='/Contract' element={<Contract/>}></Route>
           </Route>

   ))
  
  return (
    <>
     <RouterProvider router = {jakononam}/>
    
    </>
    
  )
}

export default App
