import { createBrowserRouter } from "react-router";
import App from "./App";
import MainBody from "./layouts/MainBody";
import WatchPage from "./layouts/Watch page/WatchPage";
import SignPage from "./layouts/Sign/SignPage";
import HistoryPage from "./layouts/History/HistoryPage";
import Body from "./layouts/Body";

export const appRouter = createBrowserRouter([
  {
    path: "sign",
    element: <SignPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainBody />,
        children: [
          {
            path: "/",
            element: <Body />,
          },
          {
            path: "/history",
            element: <HistoryPage />,
          },
        ],
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);
