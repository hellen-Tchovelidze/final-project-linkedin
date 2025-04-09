

import React, { Suspense } from 'react';
import ProfilePageComponent from '@/app/components/__organisms/ProfilePageComponent/ProfilePageComponent';

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfilePageComponent />
    </Suspense>
  );
}

export default Page;
