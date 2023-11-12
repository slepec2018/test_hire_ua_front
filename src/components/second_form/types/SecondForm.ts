import { MainData } from "../../first_form/types/FirstForm";

export type SecondFormProps = {
  changeStep: (newStep: number) => void;
  changeData: (data: MainData) => void;
  submit: () => void;
};

export type UserData = {
  address: string;
  zipCode: string;
};