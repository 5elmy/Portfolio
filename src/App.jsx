
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MasterPage from './Components/MasterPage/MasterPage'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import Work from './Components/Work/Work'

function App() {
  const routes = createBrowserRouter([
    {path:"" , element:<MasterPage/> , children:[
      {index:true , element:<Home/>},
      {path:"about" , element:<About/>},
      {path:"skills" , element:<Skills/>},
      {path:"experience" , element:<Experience/>},
      {path:"work" , element:<Work/>},
    ]}])

  return (
    <>
   <RouterProvider router={routes} />
    
     
    </>
  )
}

export default App
