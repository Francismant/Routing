import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";
import ErrorPage from "./pages/ErrorPage";
import ProfileView from "./pages/Profile/pages/ProfileView/ProfileView";
import ProfileData from "./pages/Profile/pages/ProfileData/ProfileData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
        children: [
          {
            // chaine de caractère vide afin d'être sur cette page par défaut
            path: "",
            element: <ProfileView />,
          },
          {
            path: "profileData",
            element: <ProfileData />,
          },
        ],
      },
    ],
  },
]);
