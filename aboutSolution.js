```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import { useRouter } from 'next/router';

export default async function About() {
  const router = useRouter();
  const session = await unstable_getServerSession(authOptions);

  if (!session) {
    // Redirect to login page if not authenticated
    router.push('/login');
    return null; // Prevent rendering of the page
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>You are logged in as {session.user.name}</p>
    </div>
  );
}
```