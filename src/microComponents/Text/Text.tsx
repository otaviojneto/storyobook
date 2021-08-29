import styled from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

type TextProps = TypographyProps &
  ColorProps &
  SpaceProps & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  };

const Text = styled.div<TextProps>`
  h1 {
    font-size: 27px;
  }

  h2 {
    font-size: 26px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 16px;
  }

  ${color}
  ${space}
  ${typography}
`;

Text.displayName = 'Text';

export default Text;
