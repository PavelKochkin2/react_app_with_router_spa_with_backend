import { useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
export const EditEventPage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <EventForm />
    </>
  );
};
