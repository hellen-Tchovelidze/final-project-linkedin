

import { Suspense } from 'react';
import ProfilePageMine from '@/app/components/__organisms/ProfilePageMine/ProfilePageMine';

function Page() {
  return (
    <div>
      <Suspense fallback={<p>loading...</p>}>
        <ProfilePageMine />
      </Suspense>
    </div>
  );
}

export default Page;
