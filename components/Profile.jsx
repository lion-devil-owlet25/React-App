import { useQuery } from '@tanstack/react-query';
import { fetchProfile } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { user, token } = useAuth();
  const { data, isLoading } = useQuery(['profile', user?.id], () => fetchProfile(user.id, token));

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h2>{data.data.user.name}</h2>
      {/* show products or other details */}
    </div>
  );
}

