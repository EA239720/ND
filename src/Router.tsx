import { createBrowserRouter } from "react-router-dom"

//LandingPage
import MainPage from "./pages/LandingPage/MainPage"
import ContentOne from "./pages/LandingPage/ContentOne"
import ContentTwo from "./pages/LandingPage/ContentTwo"

//App
import Login from './pages/App/Login'
import App from './pages/App/App'
import Sales from './pages/App/Sales'
import NewClient from './pages/App/NewClient'
import SaleDetails from './pages/App/SaleDetails'
import Construct from "./pages/App/Construct"

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/Content1",
        element: <ContentOne />
    },
    {
        path: "/Content2",
        element: <ContentTwo />
    },
    {
        path: "/App/Login",
        element: <Login />
    },
    {
        path: "/App/Home",
        element: <App />
    },
    {
        path: "/App/Client",
        element: <NewClient />
    },
    {
        path: "/App/Sales",
        element: <Sales />
    },
    {
        path: "/App/SaleDetails/:id",
        element: <SaleDetails />
    },
    {
        path: "/App/Contruct",
        element: <Construct />
    },
]);

export default Routes