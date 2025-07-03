import { useForm } from 'react-hook-form';
import { loginCheck } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function OTPForm({ mobile, serverOTP }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    if (data.otp !== serverOTP) {
      alert('Wrong OTP!');
      return;
    }
    const res = await loginCheck(mobile);
    if (res.data.token) {
      login(res.data.token, res.data.user);
      navigate('/');
    } else {
      navigate('/register', { state: { mobile } });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Enter OTP" {...register('otp', { required: true })} />
      <button type="submit">Verify OTP</button>
    </form>
  );
}
