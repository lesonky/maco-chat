'use client';

import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

import McLogo from '@/components/McLogo';
import { mobileHeaderSticky } from '@/styles/mobileHeader';

import ShareAgentButton from '../../features/ShareAgentButton';

const Header = memo(() => {
  return (
    <MobileNavBar
      center={<McLogo type={'text'} />}
      right={<ShareAgentButton mobile />}
      style={mobileHeaderSticky}
    />
  );
});

export default Header;
