import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

import McLogo from '@/components/McLogo';

const Header = memo(() => <MobileNavBar center={<McLogo type={'text'} />} />);

export default Header;
