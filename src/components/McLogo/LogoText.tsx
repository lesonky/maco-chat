import { SvgProps } from '@lobehub/ui';
import { memo } from 'react';

type LogoProps = Partial<SvgProps> & { height?: any; text?: string; width?: any };

const LogoText = memo<LogoProps>(({ text, ...rest }) => (
  <svg
    fill="currentColor"
    fillRule="evenodd"
    viewBox="0 0 940 320"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <text style={{ fontSize: '200px' }} textAnchor="middle" x="50%" y="70%">
      {text}
    </text>
  </svg>
));

export default LogoText;
