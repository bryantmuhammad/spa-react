import React from "react";
import { useParams } from "react-router-dom";

function EditEventPage() {
  const param = useParams();
  return (
    <>
      <h1>Edit Event Page</h1>
      <p>{param.eventId}</p>
    </>
  );
}

export default EditEventPage;
