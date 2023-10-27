import { useParams } from "react-router-dom";

export const EventDetailsPage = () => {
  const params = useParams();
  return <h1>Welcome to EventDetails Page Event Id : {params.id}</h1>;
};
