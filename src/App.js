import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Root from './pages/Root';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    errorElement:<NotFound />,
    children:[
      {index:true,element:<Home />},
      {path:'/notfound',element:<NotFound />}
    ]
  },
  {
    path:'/signup',
    element:<Signup />
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
