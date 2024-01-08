import type { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <h1>This is Layout title</h1>
      {children}
    </div>
  );
}
