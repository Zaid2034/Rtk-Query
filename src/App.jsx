/* eslint-disable no-unused-vars */
import './App.css'
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Read } from './components/read'
import {Provider} from 'react-redux'
import { store } from './app/store';
import Header from './components/Header';
import Creator from './components/Creator';
import { AddEdit } from './components/AddEdit';

export const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children: [
      {
        path: "",
        element: <Read />,
      },
      {
        path:'/create',
        element:<Creator/>
      },
      {
        path:'/edit/:id',
        element:<AddEdit/>
      }
    ],

  }
])
function App() {
  
  return (
    <>
     <Provider store={store}>
      <Header/>
      <Outlet/>
     </Provider>
    </>
  )
}
export default App
