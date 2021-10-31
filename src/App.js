import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Blogs from './Pages/Blogs/Blogs';
import Aboutus from './Pages/Aboutus/Aboutus';
import Login from './Pages/Login/Login';
import Header from './Pages/SharePages/Header/Header';
import Footer from './Pages/SharePages/Footer/Footer';
import AuthProvider from './context/AuthProvider/AuthProvider';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Booking from './Pages/Booking/Booking';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import AddNewBlog from './Pages/AddNewBlog/AddNewBlog';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Header/>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home/>
              </Route>
              <Route path='/services'>
                <Services/>
              </Route>
              <PrivateRoute path='/service/:id'>
                <ServiceDetail></ServiceDetail>
              </PrivateRoute>
              <PrivateRoute path='/booking/:id'>
                <Booking></Booking>
              </PrivateRoute>
              <Route path='/blogs'>
                <Blogs/>
              </Route>
              <PrivateRoute path='/addblog'>
                <AddNewBlog/>
              </PrivateRoute>
              <Route path='/about'>
                <Aboutus/>
              </Route>
              
              <PrivateRoute path="/orders">
                <ManageAllOrders/>
              </PrivateRoute>
              <Route path='/login'>
                <Login/>
              </Route>
            </Switch>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
