import { useEffect } from 'react';
//@ts-expect-error-next-line
import { useRouter } from 'remote/use-routing';

export function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push('/home');
  }, [router]);

  return null;
}

export default Index;
