export type FirstFormProps = {
  changeStep: (newStep: number) => void;
  changeData: (data: MainData) => void;
};

export type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type MainData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  zipCode?: string;
};