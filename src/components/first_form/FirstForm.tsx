import React, { useState, ChangeEvent } from 'react';
import { FirstFormProps, UserData } from "./types/FirstForm";
import Button from "../ui_form/button/Button";
import Input from "../ui_form/input/Input";
import { firstStepValidation } from "../../utils/validation";

function FirstForm({ changeStep, changeData }: FirstFormProps) {
  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [validMessage, setValidMessage] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => { 
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value
    });
  }

  const handleClean = () => {
    setUserData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    });
  }

  const handleNextStep = () => { 
    const { ok, error } = firstStepValidation(userData);

    if (!ok && error) { 
      setValidMessage(error);
      return;
    }

    setValidMessage('');
    changeData(userData);
    changeStep(2);
  }

  return (
    <>
      <div className='h-[20px]'>
        <p className="max-w-sm font-sans font-light text-red-600">
            {validMessage}
        </p>
      </div>
      <div className="flex flex-col items-center justify-between">
        <Input
          placeholder={'Enter your first name'}
          value={userData.firstName}
          name={'firstName'}
          type={'text'}
          onChange={handleChange}
        />
        <Input
          placeholder={'Enter your last name'}
          value={userData.lastName}
          name={'lastName'}
          type={'text'}
          onChange={handleChange}
        />
        <Input
          placeholder={'Enter your email adress'}
          value={userData.email}
          name={'email'}
          type={'email'}
          onChange={handleChange}
        />
        <Input
          placeholder={'Enter your phone number'}
          value={userData.phoneNumber}
          name={'phoneNumber'}
          type={'tel'}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col items-center justify-between  mt-6 space-y-6 md:flex-row md:space-y-0 ">
        <Button value={"Cancel"} onClick={handleClean} />
        <Button value={"Next"} onClick={handleNextStep} />
      </div>
    </>
  );
}

export default FirstForm;