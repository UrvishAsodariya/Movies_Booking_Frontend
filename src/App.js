import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Component/Home/Home';
import PageLoader from './Component/PageLoader';
import Movies_Grid from './Component/Movies/Movies_Grid';
import Ticket_Search from './Component/Ticket_Search'
import Movies_List from './Component/Movies/Movies_List';
import Movies_Detail from './Component/Movies/Movies_Detail';
import Movies_Ticketplan from './Component/Movies/Movies_Ticketplan';
import Movies_Seatplan from './Component/Movies/Movies_Seatplan';
import Movies_Checkout from './Component/Movies/Movies_Checkout';
import Movies_Food from './Component/Movies/Movies_Food';
import Events from './Component/Events/Events';
import Events_Speaker from './Component/Events/Events_Speaker';
import Events_Detail from './Component/Events/Events_Detail';
import Events_Ticket from './Component/Events/Events_Ticket';
import Events_Checkout from './Component/Events/Events_Checkout';
import Sports from './Component/Sports/Sports';
import Sports_Detail from './Component/Sports/Sports_Detail';
import Sports_Ticket from './Component/Sports/Sports_Ticket';
import Sports_Checkout from './Component/Sports/Sports_Checkout';
import Aboutus from './Component/Pages/Aboutus';
import App_Downlode from './Component/Pages/App_Downlode';
import Signin from './Component/Pages/Signin';
import Signup from './Component/Pages/Signup';
import Error404 from './Component/Pages/Error404';
import Blog from './Component/Blog/Blog';
import Blog_Detail from './Component/Blog/Blog_Detail';
import Contactus from './Component/Contactus';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='PageLoader' element={<PageLoader />} /> */}
      <Route path='/Ticket_Search' element={<Ticket_Search />} />
      <Route path='/Header' element={<Header />} />
      <Route path='/Footer' element={<Footer />} />

      <Route path='/Movies_Grid' element={<Movies_Grid />} />
      <Route path='/Movies_List' element={<Movies_List />} />
      <Route path='/Movies_Detail' element={<Movies_Detail />} />
      <Route path='/Movies_Ticketplan' element={<Movies_Ticketplan />} />
      <Route path='/Movies_Seatplan' element={<Movies_Seatplan />} />
      <Route path='/Movies_Checkout' element={<Movies_Checkout />} />
      <Route path='/Movies_Food' element={<Movies_Food />} />

      <Route path='/Events' element={<Events />} />
      <Route path='/Events_Detail' element={<Events_Detail />} />
      <Route path='/Events_Speaker' element={<Events_Speaker />} />
      <Route path='/Events_Ticket' element={<Events_Ticket />} />
      <Route path='/Events_Checkout' element={<Events_Checkout />} />

      <Route path='/Sports' element={<Sports />} />
      <Route path='/Sports_Detail' element={<Sports_Detail />} />
      <Route path='/Sports_Ticket' element={<Sports_Ticket />} />
      <Route path='/Sports_Checkout' element={<Sports_Checkout />} />

      <Route path='/Aboutus' element={<Aboutus />} />
      <Route path='/App_Downlode' element={<App_Downlode />} />
      <Route path='/Signin' element={<Signin />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Error404' element={<Error404 />} />

      <Route path='/Blog' element={<Blog />} />
      <Route path='/Blog_Detail' element={<Blog_Detail />} />

      <Route path='/Contactus' element={<Contactus />} />


    </Routes>
  );
}

export default App;
