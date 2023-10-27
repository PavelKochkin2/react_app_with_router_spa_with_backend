import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "1", title: "event1" },
  { id: "2", title: "event2" },
  { id: "3", title: "event3" },
];

export const EventsPage = () => {
  return (
    <ul>
      {DUMMY_EVENTS.map((event) => {
        return (
          <Link key={event.id} to={`/events/${event.id}`}>
            {event.id} {":"} {event.title}
            <p></p>
          </Link>
        );
      })}
    </ul>
  );
};
