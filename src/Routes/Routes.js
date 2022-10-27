import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import ErrorPage from "../Pages/ErrorPage.jsx";
import Home from '../Pages/Home.jsx';
import Login from '../Pages/Login.jsx';
import AllNews from "../Pages/OtherComponents/AllNews";
import CategoryNews from "../Pages/OtherComponents/CategoryNews";
import NewsDetails from "../Pages/OtherComponents/NewsDetails";
import SignUp from '../Pages/SignUp.jsx';
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('https://news-today-server-flame.vercel.app/news')
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      },
      {
        path: '/allnews',
        element: <PrivateRoute><AllNews/></PrivateRoute>,
        loader: () => fetch('https://news-today-server-flame.vercel.app/news-categories/08')
      },
      {
        path: '/news-categories/:id',
        element: <PrivateRoute><CategoryNews/></PrivateRoute>,
        loader: ({params}) => fetch(`https://news-today-server-flame.vercel.app/news-categories/${params.id}`)
        
      },
      {
        path: '/news/:id',
        element: <PrivateRoute><NewsDetails/></PrivateRoute>,
        loader: ({params}) => fetch(`https://news-today-server-flame.vercel.app/news/${params.id}`)
      }
    ]
  }
])


export default routes;