import React from 'react';
import Accordion from './Accordion';

import { IcDocument, IcMonetization, IcPerson, IcReceipt } from '../../icons';
import Panel, { AccordionType } from './Panel';

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
  sizeHeaderText,
}: AccordionType) => {
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
          title={item.name}
          id={item.id}
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
  sizeHeaderText,
}: AccordionType) => {
  return (
    <>
      {Information.map(item => (
        <Accordion collapse>
          <Panel
            bg={bg}
            colorDivider={colorDivider}
            bgColorHeader={bgColorHeader}
            colorHeaderText={colorHeaderText}
            ContentBg={ContentBg}
            icon={item.icon}
            sizeHeaderText={sizeHeaderText}
            title={item.name}
            id={item.id}
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
