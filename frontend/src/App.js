import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPageWrapper } from "./RootPageWrapper";
import { HomePage } from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import {
  EventDetailsPage,
  loader as eventDetailsLoader,
  deleteEventAction,
} from "./pages/EventDetails";
import { NewEventPage } from "./pages/NewEvent";
import { EditEventPage } from "./pages/EditEvent";
import EventsNavigation from "./components/EventsNavigation";
import { ErrorPage } from "./pages/Error";
import { addUpdateEventFormAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

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
        path: "new",
        element: <NewEventPage />,
        action: addUpdateEventFormAction,
      },
      {
        path: ":id",
        id: "event-details",
        loader: eventDetailsLoader,

        children: [
          {
            index: true,
            element: <EventDetailsPage />,
            action: deleteEventAction,
          },
          {
            path: "edit",
            element: <EditEventPage />,
            action: addUpdateEventFormAction,
          },
        ],
      },
    ],
  },
  {
    path: "newsletter",
    element: <NewsletterPage />,
    action: newsletterAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
