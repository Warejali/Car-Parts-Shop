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
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import RequireAuth from './components/Login/RequireAuth';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageUsers from './components/Dashboard/ManageUsers';
import ProductDetails from './components/Products/ProductDetails';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/blog" element={<Blogs></Blogs>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/productDetails/:id" element={<ProductDetails></ProductDetails>} />

        <Route element={<RequireAuth></RequireAuth>}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>} >
            <Route path="addReview" element={<AddReview></AddReview>} />
            <Route path="myOrders" element={<MyOrders></MyOrders>} />
            <Route path="myProfile" element={<MyProfile></MyProfile>} />
          </Route>
        </Route>
        {/* <Route element={<RequireAdmin></RequireAdmin>}> */}
        <Route path="/dashboard" element={<Dashboard></Dashboard>} >
          <Route path="addProducts" element={<AddProduct></AddProduct>} />
          <Route path="manageOrders" element={<ManageOrders></ManageOrders>} />
          <Route path="manageProducts" element={<ManageProducts></ManageProducts>} />
          <Route path="myProfile" element={<MyProfile></MyProfile>} />
          <Route path="manageUsers" element={<ManageUsers></ManageUsers>} />
        </Route>
        {/* </Route> */}
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
