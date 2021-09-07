import React from 'react';
import Accordion from './Accordion';

import {
  IcChevronDown,
  IcPerson,
  IcDocument,
  IcMonetization,
  IcReceipt,
} from '../../icons';
import Panel, { AccordionType } from './Panel';
import { Box} from '../../microComponents';
import theme from '../../styles/colors'

export default {
  title: 'Components/Accordion',
  argTypes: {
    bg: { control: 'color', description: 'background color ' },

    colorDivider: {
      control: 'color',
      description: 'bg color line',
    },

    sizeHeaderText: { control: 'number', description: 'size' },

    title: { control: 'text', description: 'title' },

    ContentBg: {
      control: 'color',
      description: 'background Content ',
    },

    colorHeaderText: {
      control: 'color',
      description: 'color header Text ',
    },

    bgColorHeader: {
      control: 'color',
      description: 'background header Text ',
    },

    icon: {
      control: {
        type: 'select',
        options: [IcPerson, IcDocument, IcMonetization],
      },
    },
    paddingHeader: {
      control: 'text',
    },

    childrenPaddingX: {
      control: 'text',
    },

    childrenPaddingY: {
      control: 'text',
    },
  },
};

const Information = [
  {
    id: 1,
    icon: IcPerson,
    name: 'Informação Pessoal',
  },
  {
    id: 2,
    icon: IcDocument,
    name: 'Informação de Faturação',
  },
  {
    id: 3,
    icon: IcMonetization,
    name: 'Pagamento',
  },
  {
    id: 4,
    icon: IcReceipt,
    name: 'Políticas',
  },
];

export const AccordionComponent = ({
  bg,
  bgColorHeader,
  colorDivider,
  colorHeaderText,
  ContentBg,
  header,
  paddingHeader,
  sizeHeaderText,
  childrenPaddingX,
  childrenPaddingY,
}: AccordionType) => {
  const RenderHeader = (
    <Box backgroundColor="red">
      <h2>Lorem</h2>
    </Box>
  );

  return (
    <Accordion>
      {Information.map(item => (
        <Panel
          bg={bg}
          colorDivider={colorDivider}
          bgColorHeader={bgColorHeader}
          colorHeaderText={colorHeaderText}
          ContentBg={ContentBg}
          icon={item.icon}
          sizeHeaderText={sizeHeaderText}
          header={item.name}
          id={item.id}
          paddingHeader={paddingHeader}
          childrenPaddingX={childrenPaddingX}
          childrenPaddingY={childrenPaddingY}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ex, esse aliquid culpa animi natus nulla
          architecto atque impedit soluta dolores iusto officia
          error cupiditate aperiam facilis facere magni ut iure?
        </Panel>
      ))}
    </Accordion>
  );
};

export const Colapse = ({
  bg,
  bgColorHeader,
  colorDivider,
  colorHeaderText,
  ContentBg,
  header,
  paddingHeader,
  sizeHeaderText,
  childrenPaddingX,
  childrenPaddingY,
}: AccordionType) => {
  const RenderHeader = (
    <Box backgroundColor="white">
      <h2>Lorem</h2>
    </Box>
  );

  return (
    <>
      {Information.map(item => (
        <Accordion collapse>
          <Panel
            bg={bg}
            colorDivider={`${theme.colors.primary}`}
            bgColorHeader={bgColorHeader}
            colorHeaderText={colorHeaderText}
            ContentBg={ContentBg}
            icon={item.icon}
            sizeHeaderText={sizeHeaderText}
            header={RenderHeader}
            id={1}
            paddingHeader={paddingHeader}
            childrenPaddingX={childrenPaddingX}
            childrenPaddingY={childrenPaddingY}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ex, esse aliquid culpa animi natus nulla
            architecto atque impedit soluta dolores iusto officia
            error cupiditate aperiam facilis facere magni ut
            iure?
          </Panel>
        </Accordion>
      ))}
      <br />
      <br />
      <br />;
    </>
  );
};
