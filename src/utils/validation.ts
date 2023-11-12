import { UserData } from "../components/first_form/types/FirstForm";
import { UserData as SecondValidation } from "../components/second_form/types/SecondForm";

export const firstStepValidation = ({ firstName, lastName, email, phoneNumber }: UserData) => { 
  if (!firstName.trim()) {
    return {ok: false, error: "First Name is missing"};
  }

  if (!lastName.trim()) {
    return {ok: false, error: "Last Name is missing"};
  }

  if (!email.trim()) {
    return {ok: false, error: "Email is missing"};
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Invalid email" };
  }

  if (!phoneNumber.trim()) {
    return {ok: false, error: "Phone number is missing"};
  }

  return {ok: true};
}

export const secondStepValidation = ({ address, zipCode }: SecondValidation) => {
  if (!address.trim()) {
    return {ok: false, error: "Address is missing"};
  }

  if (!zipCode.trim()) {
    return {ok: false, error: "Zip Code is missing"};
  }

  return {ok: true};
}