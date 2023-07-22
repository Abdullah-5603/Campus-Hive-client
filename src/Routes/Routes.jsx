import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyColleges from "../Pages/MyColleges/MyColleges";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : 'colleges',
                element : <Colleges/>
            },
            {
                path : 'admission',
                element : <Admission/>
            },
            {
                path : 'my-colleges',
                element : <MyColleges/>
            },
            {
                path : 'login',
                element : <Login/>
            },
            {
                path : 'sign-up',
                element : <SignUp/>
            }
        ]
    }
])

export default router;