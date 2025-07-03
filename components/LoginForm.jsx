import { useForm } from 'react-hook-form';
import { sendOTP } from '../services/api';
import { useState } from 'react';
import OTPForm from './OTPForm';

export default function LoginForm({ onOTPSent }) {
  const { register, handleSubmit } = useForm();
  const [serverOTP, setServerOTP] = useState('');

  const onSubmit = async (data) => {
    const res = await sendOTP(data.mobile);
    setServerOTP(res.data.otp); // keep it for testing
    onOTPSent(data.mobile, res.data.otp);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Mobile" {...register('mobile', { required: true })} />
      <button type="submit">Send OTP</button>
    </form>
  );
}
