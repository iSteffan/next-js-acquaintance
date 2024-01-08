// 'use client';

// import { useState } from 'react';

export default async function ProfilePage() {
  // const [isAdmin, setIsAdmin] = useState(false);

  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response =>
    response.json()
  );

  return <div>{data.id}</div>;
}
