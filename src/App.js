// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog';
import AllCourses from './Components/Courses/AllCourses';
import CatagoryCourse from './Components/Courses/CatagoryCourse';
import Courses from './Components/Courses/Courses';
import Faq from './Components/Faq';
import Home from './Components/Home';
import Register from './Components/Register';
import SignIN from './Components/SignIN';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/signin',
          element: <SignIN></SignIN>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },
        {
          path: '/courses',
          loader: () => fetch('http://localhost:5000/course'),
          element: <AllCourses></AllCourses>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/catagory/:id',
          loader: ({params}) => fetch(`http://localhost:5000/catagory/${params.id}`),
          element: <Courses></Courses>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
