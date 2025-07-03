import { useForm } from 'react-hook-form';
import { registerUser } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('mobile', state.mobile);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('user_type_id', 1);
    formData.append('company_name', data.company_name);
    formData.append('login_via', 'ANDROID');
    formData.append('gst_no', data.gst_no);
    formData.append('pan_no', data.pan_no);
    formData.append('location_id', 132050);
    formData.append('profile_image', data.profile_image[0]);

    const res = await registerUser(formData);
    login(res.data.token, res.data.user);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register('name', { required: true })} />
      <input placeholder="Email" {...register('email', { required: true })} />
      <input placeholder="Company" {...register('company_name', { required: true })} />
      <input placeholder="GST No" {...register('gst_no', { required: true })} />
      <input placeholder="PAN No" {...register('pan_no', { required: true })} />
      <input type="file" {...register('profile_image', { required: true })} />
      <button type="submit">Register</button>
    </form>
  );
}
