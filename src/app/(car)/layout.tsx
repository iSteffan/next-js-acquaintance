import type { PropsWithChildren } from 'react';

export default function CarLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <h1>This is Car Layout title</h1>
      {children}
    </div>
  );
}
