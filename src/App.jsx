import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import DefaultPage from "./views/DefaultPage";
import StagePage from "./views/StagePage";
import DetailPage from "./views/DetailPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/festival/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />,
      },
      {
        path: "stagepage/:stageId",
        element: <StagePage/>
      },
      {
        path: "detailpage/:eventId",
        element: <DetailPage />
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router}/>
}