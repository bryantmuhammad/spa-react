import React from "react";
import EventItem from "./../components/EventItem";
import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Event Detail Page</h1>
      <p>{params.eventId}</p>
      {/* <EventItem /> */}
    </>
  );
}

export default EventDetailPage;
