import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPageWrapper } from "./RootPageWrapper";
import { HomePage } from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import {
  EventDetailsPage,
  loader as eventDetailsLoader,
} from "./pages/EventDetails";
import { NewEventPage } from "./pages/NewEvent";
import { EditEventPage } from "./pages/EditEvent";
import EventsNavigation from "./components/EventsNavigation";
import { ErrorPage } from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPageWrapper />,
    errorElement: <ErrorPage />,
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
        loader: eventDetailsLoader,
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
