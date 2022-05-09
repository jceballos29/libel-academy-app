import { lazy } from "react";
import { Navigate, useRoutes, /*useLocation*/ } from "react-router-dom";
import path from "./path";

import { useSelector } from "react-redux";

const MainLayout = lazy(() => import("../components/layouts/MainLayout"));
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
// const Checkout = lazy(() => import("../pages/Checkout"));
const Courses = lazy(() => import("../pages/Courses"));
const Course = lazy(() => import("../pages/Courses/pages/Course"));
const Lessons = lazy(() => import("../pages/Courses/pages/Lessons"));
const LessonDetail = lazy(() => import("../pages/Courses/pages/LessonDetail"));
// const Categories = lazy(() => import("../pages/Categories"));
// const Category = lazy(() => import("../pages/Categories/Category"));
const Privacy = lazy(() => import("../pages/PrivacyPolicy"));
const Terms = lazy(() => import("../pages/TermsAndConditions"));

const User = lazy(() => import("../pages/User"));
const UserDashboard = lazy(() => import("../pages/User/pages/Dashboard"));
const UserEnrolledCourses = lazy(() => import("../pages/User/pages/EnrolledCourses"));
const UserProfile = lazy(() => import("../pages/User/pages/Profile"));
const UserWishlist = lazy(() => import("../pages/User/pages/Wishlist"));
const UserSettings = lazy(() => import("../pages/User/pages/Settings"));

const NotFound = lazy(() => import("../pages/NotFound"));



const AppRoutes = () => {

  const {user} = useSelector(state => state.user);
  // const location = useLocation();

  const routes = [
    {
      path: path.home,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: path.courses.home,
          children: [
            {
              index: true,
              element: <Courses />,
            },
            {
              path: path.courses.detail,
              element: <Course />,
            },
            {
              // path: path.courses.lessons,
              element: user ? (
                <Lessons />
              ) : (
                <Navigate replace to={path.courses.home}/>
              ),
              children: [
                {
                  path: path.courses.lesson,
                  element: <LessonDetail />,
                }
              ]
            },
          ],
        },
        // {
        //   path: path.categories.home,
        //   children: [
        //     {
        //       index: true,
        //       element: <Categories />,
        //     },
        //     {
        //       path: path.categories.detail,
        //       element: <Category />,
        //     },
        //   ],
        // },
        {
          path: path.user.dashboard,
          element: user ? (
            <User />
          ) : (
            <Navigate replace to={path.login}/>
          ),
          children: [
            {
              index: true,
              element: <UserDashboard />,
            },
            {
              path: path.user.profile,
              element: <UserProfile />,
            },
            {
              path: path.user.courses,
              element: <UserEnrolledCourses />,
            },
            {
              path: path.user.wishlist,
              element: <UserWishlist />,
            },
            {
              path: path.user.settings,
              element: <UserSettings />,
            }
          ]
        },
        {
          path: path.privacy,
          element: <Privacy />,
        },
        {
          path: path.terms,
          element: <Terms />,
        },
        // {
        //   path: path.checkout,
        //   element: <Checkout />,
        // },
      ],
    },
    {
      path: path.login,
      element: !user ? (
        <Login />
      ) : (
        <Navigate to={path.user.dashboard} replace />
      ),
    },
    {
      path: path.register,
      element: !user ? (
        <Register />
      ) : (
        <Navigate to={path.user.dashboard} replace />
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];  


  return useRoutes(routes);
};

export default AppRoutes;
