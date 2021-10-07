import React, { ReactElement, useContext } from 'react';
import { AccordionContext } from './Accordion';
import {
  Content,
  Hero,
  Icon,
  ExpandIcon,
  OpenTabProps,
  Tab,
} from './styles';
import { IcChevronDown } from '../../icons';
import theme from '../../styles/colors';

export type AccordionType = OpenTabProps & {
  expandIcon?: string;
  icon?: string;
  id: number;
  header: ReactElement | string;
};

const Panel: React.FC<AccordionType> = ({
  bg = `${theme.colors?.white}`,
  bgColorHeader,
  expandIcon = IcChevronDown,
  children,
  colorDivider = `${theme.colors?.gray}`,
  contentBg = `${theme.colors?.white}`,
  colorHeaderText,
  icon,
  id,
  sizeHeaderText = 13,
  header,
  paddingHeader,
  childrenPaddingX,
  childrenPaddingY,
}) => {
  const { activeTab, handleChange } =
    useContext(AccordionContext);

  return (
    <Tab bg={bg} colorDivider={colorDivider}>
      <Hero
        colorHeaderText={colorHeaderText}
        bgColorHeader={bgColorHeader}
        sizeHeaderText={sizeHeaderText}
        onClick={() => handleChange(id)}
        paddingHeader={paddingHeader}
      >
        <div>
          {icon && <Icon src={icon} alt="icon" />}

          {header}
        </div>

        <ExpandIcon
          src={expandIcon}
          alt="chevron"
          isOpen={activeTab.includes(id)}
        />
      </Hero>

      <Content
        isOpen={activeTab.includes(id)}
        contentBg={contentBg}
        childrenPaddingX={childrenPaddingX}
        childrenPaddingY={childrenPaddingY}
      >
        {children}
      </Content>
    </Tab>
  );
};

export default Panel;
