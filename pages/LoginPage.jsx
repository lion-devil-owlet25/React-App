import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import OTPForm from '../components/OTPForm';

export default function LoginPage() {
  const [mobile, setMobile] = useState('');
  const [serverOTP, setServerOTP] = useState('');

  return (
    <div>
      {!serverOTP ? (
        <LoginForm onOTPSent={(m, otp) => { setMobile(m); setServerOTP(otp); }} />
      ) : (
        <OTPForm mobile={mobile} serverOTP={serverOTP} />
      )}
    </div>
  );
}
