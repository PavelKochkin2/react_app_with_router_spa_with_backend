import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
export const EditEventPage = () => {
  const data = useRouteLoaderData("event-details");

  console.log(data);
  return (
    <>
      <EventForm event={data.event} />
    </>
  );
};
