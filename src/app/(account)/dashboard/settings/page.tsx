import Link from 'next/link';

export default function SettingsPage() {
  return (
    <div>
      <p>This is my SettingsPage</p>
      <Link href="/admin">Go to Admin</Link>
      <br />
      <Link href="/dashboard">Go to Dashboard</Link>
      <br />
      <Link href="/dashboard/settings">Go to Settings</Link>
      <br />
      <Link href="/dashboard/settings/password">Go to Password</Link>
      <br />
      <Link href="/dashboard/settings/profile">Go to Profile</Link>
    </div>
  );
}
