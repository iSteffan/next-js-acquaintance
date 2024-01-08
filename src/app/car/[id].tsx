'use client';
import { useRouter } from 'next/router';

export default function CarPage() {
  // console.log(' process.env.DB_HOST', process.env.NEXT_PUBLIC_DB_HOST);
  const { asPath, pathname } = useRouter();
  console.log(asPath, pathname);

  return <div>This is my CarPage</div>;
}
