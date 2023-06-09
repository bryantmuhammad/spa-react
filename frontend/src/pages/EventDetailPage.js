import React from "react";
import EventItem from "./../components/EventItem";
import { json, useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  const event = params.event;
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>{params.eventId}</p>
      {/* <EventItem /> */}
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const eventId = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${eventId}`);

  if (!response.ok) {
    throw json(
      {
        message: "Fetch Event Failed",
      },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
