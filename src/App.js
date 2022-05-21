import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';
import AddProduct from './components/Dashboard/AddProduct';
import AddReview from './components/Dashboard/AddReview';
import Dashboard from './components/Dashboard/Dashboard';
import ManageOrders from './components/Dashboard/ManageOrders';
import ManageProducts from './components/Dashboard/ManageProducts';
import MyOrders from './components/Dashboard/MyOrders';
import MyProfile from './components/Dashboard/MyProfile';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<Blogs></Blogs>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} >
          <Route path="addProducts" element={<AddProduct></AddProduct>} />
          <Route path="addReview" element={<AddReview></AddReview>} />
          <Route path="manageOrders" element={<ManageOrders></ManageOrders>} />
          <Route path="manageProducts" element={<ManageProducts></ManageProducts>} />
          <Route path="myOrders" element={<MyOrders></MyOrders>} />
          <Route path="myProfile" element={<MyProfile></MyProfile>} />
          <Route path="manageUsers" element={<MyProfile></MyProfile>} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
