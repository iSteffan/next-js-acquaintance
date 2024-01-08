import Link from 'next/link';

export default function AnalyticsPage() {
  return (
    <div>
      <p>This is my AnalyticsPage</p>
      <Link href="/admin">Go to Admin</Link>
      <br />
      <Link href="/dashboard">Go to Dashboard</Link>
      <br />
      <Link href="/dashboard/settings">Go to Settings</Link>
    </div>
  );
}
