import React, { useContext } from 'react';
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

export type AccordionType = OpenTabProps & {
  expandIcon?: string;
  icon?: string;
  id: number;
  title?: string;
};

const Panel: React.FC<AccordionType> = ({
  bg = '#ffffff',
  bgColorHeader,
  expandIcon = IcChevronDown,
  children,
  colorDivider = '#e9e9e9',
  ContentBg = '#ffffff',
  colorHeaderText,
  icon,
  id,
  sizeHeaderText = 13,
  title,
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
      >
        {icon && <Icon src={icon} alt="icon" />}

        <p>{title}</p>

        <ExpandIcon
          src={expandIcon}
          alt="chevron"
          isOpen={activeTab.includes(id)}
        />
      </Hero>

      <Content
        isOpen={activeTab.includes(id)}
        ContentBg={ContentBg}
      >
        {children}
      </Content>
    </Tab>
  );
};

export default Panel;
