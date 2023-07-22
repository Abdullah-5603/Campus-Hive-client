import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyColleges from "../Pages/MyColleges/MyColleges";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";

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
                path : 'college-details/:id',
                element : <CollegeDetails/>,
                loader : ({params}) => fetch(`${import.meta.env.VITE_BASE_URL}/all-colleges/${params.id}`)
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
            },
            {
                path : 'reset-password',
                element : <ResetPassword/>
            },
            {
                path : 'profile',
                element : <ProfilePage/>
            }
        ]
    }
])

export default router;