
import Home from "./Components/Home";
import About from "./Components/About";
import Article from "./Components/Article";
import Contactus from "./Components/Contactus";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

function App() {

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"",
                element: <Home/>
            },
            {
                path:"about",
                element: <About/>
            },
            {
                path: "article",
                element:<Article/>
            },
            {
                path:"contact-us",
                element:<Contactus/>
            }
        ]
    }
])

    return (
        <div className="w-full h-screen bg-sky-600">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
