import React from "react";
import { render, fireEvent, waitFor, wait } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("render correctly", () => {
  render(<ContactForm />);
});

test("All inputs are in the document", async () => {
  const { getByLabelText, findByTestId, queryByTestId } = render(
    <ContactForm />
  );

  const firstNameInput = getByLabelText(/first name*/i);
  expect(firstNameInput).toBeInTheDocument();
  expect(firstNameInput.value).toEqual("");

  const lastNameInput = getByLabelText(/last name*/i);
  expect(lastNameInput).toBeInTheDocument();

  const emailInput = getByLabelText(/email*/i);
  expect(emailInput).toBeInTheDocument();

  const messageInput = getByLabelText(/message/i);
  expect(messageInput).toBeInTheDocument();
});

test("ContactForm can be filled in and submitted", async () => {
  const { getByLabelText, findByTestId, queryByTestId } = render(
    <ContactForm />
  );
  const firstNameInputLabel = getByLabelText(/first Name*/i);
  fireEvent.change(firstNameInputLabel, {
    target: { name: "firstName", value: "Tatiana" },
  });
  expect(firstNameInputLabel.value).toEqual("Tatiana");

  const lastNameInputLabel = getByLabelText(/last name*/i);
  fireEvent.change(lastNameInputLabel, {
    target: { name: "lastName", value: "Zhizhimontova" },
  });
  const emailInputLabel = getByLabelText(/email*/i);
  fireEvent.change(emailInputLabel, {
    target: { name: "email", value: "tatiana@gmail.com" },
  });

  const messageInputLabel = getByLabelText(/message/i);
  fireEvent.change(messageInputLabel, {
    target: { name: "message", value: "The form is filled out" },
  });

  const submitButton = queryByTestId(/submit-btn/i);
  await waitFor(() => {
    fireEvent.click(submitButton);
  });
});
