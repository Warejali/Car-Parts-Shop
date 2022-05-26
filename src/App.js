import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';
import AddProduct from './components/Dashboard/AddProduct';
import AddReview from './components/Dashboard/AddReview';
import ManageOrders from './components/Dashboard/ManageOrders';
import ManageProducts from './components/Dashboard/ManageProducts';
import MyOrders from './components/Dashboard/MyOrders';
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
import RequireAdmin from './components/Login/RequireAdmin';
import Dashboard from './components/Dashboard/Dashboard';
import ManageReview from './components/Dashboard/ManageReview';
import MyProfile from './components/Dashboard/MyProfile';
import Payment from './components/Dashboard/Payment';
import MyAllOrders from './components/Dashboard/MyAllOrders';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/blog" element={<Blogs></Blogs>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/productDetails/:id" element={<RequireAuth><ProductDetails></ProductDetails></RequireAuth>} />

        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>} />
          <Route path="addReview" element={<AddReview></AddReview>} />
          <Route path="myOrders" element={<MyOrders></MyOrders>} ></Route>
          <Route path="myAllOrders" element={<MyAllOrders></MyAllOrders>} ></Route>
          <Route path="payment/:id" element={<Payment></Payment>} ></Route>
          <Route path="addProducts" element={<RequireAdmin><AddProduct /></RequireAdmin>} ></Route>
          <Route path="manageOrders" element={<RequireAdmin><ManageOrders /></RequireAdmin>}></Route>
          <Route path="manageProducts" element={<RequireAdmin><ManageProducts /></RequireAdmin>} ></Route>
          <Route path="manageUsers" element={<RequireAdmin><ManageUsers /></RequireAdmin>} />
          <Route path="manageReview" element={<RequireAdmin><ManageReview /></RequireAdmin>} />
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
