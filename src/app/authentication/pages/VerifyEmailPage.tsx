import { useParams } from 'react-router-dom';

import { Loading } from '@/components/ui/Loading';
import { useVerifyEmail } from '../hooks/useAuthentication';

export const VerifyEmailPage = () => {
  const { token = '' } = useParams();
  const { mutate } = useVerifyEmail(token);

  return (
    <Loading />
  );
}
