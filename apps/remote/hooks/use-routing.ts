//write a wrapper hook over next/router useRouter hook
import { useRouter as useNextRouter } from 'next/router';

export const useRouter = () => {
  const router = useNextRouter();
  return router;
};
