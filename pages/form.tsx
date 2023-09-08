import React from "react";
import Form from "./components/Form/Form";

export default function FormPage() {
  return (
    <Form
      onSubmitHandler={(name, email) =>
        console.log("submitted with:", name, email)
      }
    />
  );
}
