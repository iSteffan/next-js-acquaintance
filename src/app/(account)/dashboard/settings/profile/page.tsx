'use client';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div>
      <p>This is my ProfilePage</p>

      <button type="button" onClick={() => router.push('/dashboard')}>
        Dashboard
      </button>
    </div>
  );
}
