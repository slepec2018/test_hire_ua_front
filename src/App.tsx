import React, { useState } from 'react';
import Popup from './components/popup/Popup';
import Message from './components/message/Message';
import FirstForm from './components/first_form/FirstForm';
import SecondForm from './components/second_form/SecondForm';
import Steps from './components/steps/Steps';
import Fotopresent from './components/fotopresent/Fotopresent';
import { MainData } from './components/first_form/types/FirstForm';

function App() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    zipCode: '',
  });

  const [message, setMessage] = useState('Create your account to upload or download images, videos or music.');
  const [isError, setIsError] = useState(false);
  const [step, setStep] = useState(1);

  const handleChangeStep = (step: number) => setStep(prevStep => step);

  const handleChangeUserData = (data: MainData) => {
    const { firstName, lastName, email, phoneNumber, address, zipCode } = data;

    if (firstName && lastName && email && phoneNumber) {
      setUserData(prevUserData => ({
        ...prevUserData,
        firstName,
        lastName,
        email,
        phoneNumber,
      }));
      return;
    };

    if (address && zipCode) {
      setUserData(prevUserData => ({
        ...prevUserData,
        address,
        zipCode,
      }));
      return;
    }
  }

  const handleSubmit = async () => { 
    const apiUrl = 'http://localhost:8000/api/user/create';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const responseData = await response.json();

      if (response.ok) {
        setMessage(responseData.message);

        handleChangeStep(0);

        setUserData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          address: '',
          zipCode: '',
        });
      } else if (response.status === 400) {
        setMessage(responseData.error);
        setIsError(true);
        handleChangeStep(0);
      } else {
        handleChangeStep(0);
        throw new Error('An unexpected error occurred, please contact the administrator.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage('An unexpected error occurred, please contact the administrator.');
      setIsError(true);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-darkBlue">
      <Popup>
        <div className="p-6 md:p-20">
          <h2 className="font-mono mb-5 text-4xl font-bold">Sign Up</h2>
          <Message message={message} error={isError} />
          {step === 1 && (
            <FirstForm
              changeStep={handleChangeStep}
              changeData={handleChangeUserData}
            />
          )}
          {step === 2 && (
            <SecondForm
              changeStep={handleChangeStep}
              changeData={handleChangeUserData}
              submit={handleSubmit}
            />
          )}
        </div>
        <Fotopresent />
        {(step === 1 || step === 2) && (
          <Steps step={step} />
        )}
      </Popup>
    </div>
  );
}

export default App;
