


import SuccessPage from '@/app/components/__organisms/SuccessPageComponents/SuccessPageComponents'
import React from 'react'
import { Suspense } from 'react';
function Page() {
  return (
    <div>
      <Suspense fallback={<p>loading...</p>}>
      <SuccessPage />
      </Suspense>
    </div>
  );
}

export default Page;