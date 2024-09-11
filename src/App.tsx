
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideMenu from './SideMenu';
import TaskList from './TaskManagement/TaskList/TaskList';
import TaskDetails from './TaskManagement/TaskDetails/TaskDetails';


function App() {

  return (

    <>
      <SideMenu></SideMenu>
      <div className="p-4 sm:ml-64">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />}></Route>
            <Route path="/details/:id" element={<TaskDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
