import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPageWrapper } from "./RootPageWrapper";
import { HomePage } from "./pages/Home";
import { EventsPage } from "./pages/Events";
import { EventDetailsPage } from "./pages/EventDetails";
import { NewEventPage } from "./pages/NewEvent";
import { EditEventPage } from "./pages/EditEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPageWrapper />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/events", element: <EventsPage /> },
      {
        path: "/events/:id",
        element: <EventDetailsPage />,
      },
      {
        path: "/events/new",
        element: <NewEventPage />,
      },
      { path: "/events/:id/edit", element: <EditEventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
