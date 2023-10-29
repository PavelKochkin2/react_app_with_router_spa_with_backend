import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPageWrapper } from "./RootPageWrapper";
import { HomePage } from "./pages/Home";
import EventsPage from "./pages/Events";
import { EventDetailsPage } from "./pages/EventDetails";
import { NewEventPage } from "./pages/NewEvent";
import { EditEventPage } from "./pages/EditEvent";
import EventsNavigation from "./components/EventsNavigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPageWrapper />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "events",
    element: <EventsNavigation />,
    children: [
      {
        path: "",
        element: <EventsPage />,
        loader: async () => {
          const response = await fetch("http://localhost:8080/events");

          if (!response.ok) {
            //...
          } else {
            const resData = await response.json();

            return resData.events;
          }
        },
      },
      {
        path: ":id",
        element: <EventDetailsPage />,
      },
      {
        path: "new",
        element: <NewEventPage />,
      },
      { path: ":id/edit", element: <EditEventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
