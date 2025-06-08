import { useRouter } from 'next/router';
import { PageRouteProps } from '../interface/index';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Welcome to Splash App</h1>
    </div>
  );
}