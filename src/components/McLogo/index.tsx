import { SvgProps } from '@lobehub/ui';
import Img from '@lobehub/ui/es/Img';
import { useTheme } from 'antd-style';
import { type ReactNode, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import Divider from './Divider';
import LogoText from './LogoText';
import { useStyles } from './style';

export interface LogoProps extends Partial<SvgProps> {
  /**
   * @description Additional React Node to be rendered next to the logo
   */
  extra?: ReactNode;
  /**
   * @description Size of the logo in pixels
   * @default 32
   */
  size?: number;
  /**
   * @description Text to be rendered in the logo
   * @default 'MacoChat'
   */
  text?: string;
  /**
   * @description Type of the logo to be rendered
   * @default 'text'
   */
  type?: 'text' | 'combine' | '3d' | 'flat';
}

const Logo = memo<LogoProps>(
  ({ type = 'text', text = 'MacoChat', size = 32, style, extra, className, ...rest }) => {
    const theme = useTheme();
    // const genCdnUrl = useCdnFn();
    const { styles } = useStyles();
    let logoComponent: ReactNode;
    const logoUrl = 'https://pub-80127a367cfb4fed90be626d6405ea6a.r2.dev/maco_logo.jpg';

    switch (type) {
      case '3d': {
        logoComponent = (
          <Img alt="MacoChat" height={size} src={logoUrl} style={style} width={size} />
        );
        break;
      }
      case 'flat': {
        logoComponent = (
          <Img alt="MacoChat" height={size} src={logoUrl} style={style} width={size} />
        );
        break;
      }
      case 'text': {
        logoComponent = (
          <LogoText
            className={className}
            height={size}
            style={style}
            text={text}
            width={size * 2.9375}
            {...rest}
          />
        );
        break;
      }
      case 'combine': {
        logoComponent = (
          <>
            <Img alt="lobehub" height={size} src={logoUrl} width={size} />
            <LogoText
              style={{ height: size, marginLeft: Math.round(size / 4), width: 'auto' }}
              text={text}
            />
          </>
        );
        break;
      }
    }

    if (!extra) return logoComponent;

    const extraSize = Math.round((size / 3) * 1.9);

    return (
      <Flexbox align={'center'} className={className} horizontal style={style}>
        {logoComponent}
        <Divider style={{ color: theme.colorFill, height: extraSize, width: extraSize }} />
        <div className={styles.extraTitle} style={{ fontSize: extraSize }}>
          {extra}
        </div>
      </Flexbox>
    );
  },
);

export default Logo;
