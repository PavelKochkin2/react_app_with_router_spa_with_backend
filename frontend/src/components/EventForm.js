import { useActionData, useNavigate, useNavigation } from "react-router-dom";
import { Form } from "react-router-dom";
import classes from "./EventForm.module.css";
import { json, redirect } from "react-router-dom";

function EventForm({ method, event }) {
  const actionData = useActionData();
  const navigator = useNavigation();
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  const isSubmitting = navigator.state === "submitting";

  return (
    <Form method={method} className={classes.form}>
      {actionData && actionData.errors && (
        <ul>
          {Object.values(actionData.errors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button disabled={isSubmitting} type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting.....Wait" : "Save"}
        </button>
      </div>
    </Form>
  );
}

export async function addUpdateEventFormAction({ request, params }) {
  const data = await request.formData();
  const method = request.method;
  const eventFormData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    //edit an event
    const eventId = params.id;
    url = "http://localhost:8080/events/" + eventId;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventFormData),
  });

  if (response.code === 422) return response;
  if (!response.ok) {
    throw json({ message: "Could not create an event", status: 500 });
  }

  return redirect("/events");
}
export default EventForm;
