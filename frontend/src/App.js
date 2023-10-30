import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPageWrapper } from "./RootPageWrapper";
import { HomePage } from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
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
        loader: eventsLoader,
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
