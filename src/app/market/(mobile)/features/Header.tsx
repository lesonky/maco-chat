import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

import McLogo from '@/components/McLogo';

import ShareAgentButton from '../../features/ShareAgentButton';

const Header = memo(() => {
  return <MobileNavBar center={<McLogo type={'text'} />} right={<ShareAgentButton mobile />} />;
});

export default Header;
