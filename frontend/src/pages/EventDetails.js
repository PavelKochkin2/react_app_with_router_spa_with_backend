import { json, useLoaderData, useParams } from "react-router-dom";
import EventItem from "../components/EventItem";
export const EventDetailsPage = () => {
  const data = useLoaderData();
  debugger;
  console.log(data);
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export async function loader({ request, params }) {
  const id = params.id;
  debugger;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json({ message: "Could not load event data", status: 500 });
  }
  return response;
}
