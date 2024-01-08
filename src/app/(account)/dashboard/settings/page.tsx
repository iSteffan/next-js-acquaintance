'use client';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const router = useRouter();

  return (
    <div>
      <p>This is my SettingsPage</p>
      <button type="button" onClick={() => router.push('/admin')}>
        Admin
      </button>
      <button type="button" onClick={() => router.push('/dashboard')}>
        Dashboard
      </button>
      <button type="button" onClick={() => router.push('/dashboard/settings/password')}>
        Password
      </button>
      <button type="button" onClick={() => router.push('/dashboard/settings/profile')}>
        Profile
      </button>
    </div>
  );
}
