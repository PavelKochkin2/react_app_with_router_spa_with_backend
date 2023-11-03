import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";
export const NewEventPage = () => {
  return <EventForm />;
};

export default async function newEventAction({ request, params }) {
  const data = await request.formData();
  const eventFormData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventFormData),
  });
  if (!response.ok) {
    throw json({ message: "Could not create an event", status: 500 });
  }

  return redirect("/events");
}
