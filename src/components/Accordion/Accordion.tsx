import React, { createContext, useState } from 'react';

import { OpenTabProps } from './styles';

export type AccordionProps = OpenTabProps & {
  initialActive?: number[];
  collapse?: boolean;
};

interface ContextProps {
  activeTab: number[];
  handleChange: (id: number) => void;
}

export const AccordionContext = createContext<ContextProps>({
  activeTab: [],
  handleChange: () => null,
});

const Accordion: React.FC<AccordionProps> = ({
  children,
  collapse,
  initialActive,
}) => {
  const [activeTab, setActiveTab] = useState(
    initialActive ?? [],
  );

  const handleCollpse = (id: number) => {
    activeTab.includes(id)
      ? setActiveTab(activeTab.filter(item => item !== id))
      : setActiveTab([...activeTab, id]);
  };

  const handleAccordion = (id: number) =>
    activeTab.includes(id)
      ? setActiveTab(activeTab.slice(id, 1))
      : setActiveTab([id]);

  const handleOpen = (id: number) => {
    collapse ? handleCollpse(id) : handleAccordion(id);
  };
  return (
    <AccordionContext.Provider
      value={{
        activeTab,
        handleChange: handleOpen,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export default Accordion;
