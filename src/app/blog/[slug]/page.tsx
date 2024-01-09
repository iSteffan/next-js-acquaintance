'use client';
import { useRouter } from 'next/navigation';

export default function DynamicBlogPage({ params }: { params: { slug: string } }) {
  const router = useRouter();

  return (
    <div>
      <p>This is myDynamicBlogPage. My Post: {params.slug}</p>

      <button type="button" onClick={() => router.push('/dashboard')}>
        Dashboard
      </button>
    </div>
  );
}
