
import { currentUser } from '@clerk/nextjs';
import React from 'react'

export default async function ValidationLogin() {
    const user = await currentUser();
    if (!user) {
      return <div>error</div>;
    }
  return (
    <div className="flex w-full mb-4">
        <h1 className="text-xl font-bold">
          Xin chào! {user.firstName} {user.lastName}
        </h1>
      </div>
  )
}

  
