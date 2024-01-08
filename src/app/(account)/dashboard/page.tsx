import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div>
      <p>This is my DashboardPage</p>
      <Link href="/admin">Go to Admin</Link>
      <br />
      <Link href="/dashboard/analytics">Go to Analytics</Link>
      <br />
      <Link href="/dashboard/settings">Go to Settings</Link>
    </div>
  );
}
