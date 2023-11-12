import React, { useState, ChangeEvent } from 'react';
import { SecondFormProps, UserData } from "./types/SecondForm";
import Button from "../ui_form/button/Button";
import Input from "../ui_form/input/Input";
import { secondStepValidation } from "../../utils/validation";


function SecondForm({ changeStep, changeData, submit }: SecondFormProps) {
  const [userData, setUserData] = useState<UserData>({
    address: '',
    zipCode: '',
  });

  const [validMessage, setValidMessage] = useState('');
  const [fullFill, setFullFill] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => { 
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value
    });
  }

  const handleClean = () => {
    setUserData({
      address: '',
      zipCode: '',
    });
  }

  const handleNextStep = () => { 
    const { ok, error } = secondStepValidation(userData);

    if (!ok && error) { 
      setValidMessage(error);
      return;
    }

    setValidMessage('');
    changeData(userData);
    setFullFill(true);
  }

  const handleSubmit = () => { 
    submit();
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
          placeholder={'Enter your adress'}
          value={userData.address}
          name={'address'}
          type={'text'}
          onChange={handleChange}
        />
        <Input
          placeholder={'Enter your zip code'}
          value={userData.zipCode}
          name={'zipCode'}
          type={'text'}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col items-center justify-between  mt-6 space-y-6 md:flex-row md:space-y-0">
        <Button value={"Cancel"} onClick={handleClean} />
        <Button value={"Next"} onClick={handleNextStep} />
      </div>
      {fullFill && (
          <div className="flex justify-center mt-6 space-y-6 md:flex-row md:space-y-0">
            <Button value={"Submit"} onClick={handleSubmit} />
          </div>
        )}
    </>
  );
}

export default SecondForm;