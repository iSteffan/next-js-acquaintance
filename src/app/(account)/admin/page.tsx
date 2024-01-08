import Link from 'next/link';

export default function AdminPage() {
  return (
    <div>
      <p>This is my AdminPage</p>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
