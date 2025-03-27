import Navbar from './components/ui/shared/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/auth/Signup.jsx';
import Login from './components/auth/Login.jsx';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import path from 'path';
import Companies from './components/admin/Companies';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';

const appRouter  = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },{
    path:'/jobs',
    element:<Jobs/>
  },
{
     path:'description/:id',
     element:<JobDescription/>
}
  ,{
    path:'/browse',
    element:<Browse/>
  }
  ,{
    path:'/profile',
    element:<Profile/>
  },
  // defined paths for admin 
 {
  path:"/admin/companies",
  element:<Companies/>
 },
 {
  path:"/admin/companies/create",
  element:<CompanyCreate/>
 },
 {
  path:"/admin/companies/:id",
  element:<CompanySetup/>
 }
]);

function App() {
  return (
    <>
          <RouterProvider router ={appRouter}/>
    </>
  )
}

export default App
