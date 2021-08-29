import React, { useEffect, useState } from 'react';
import { DataList, InputString } from './styles';

export type ArrayProps = {
  keySearch?: string;
  data: any[];
  title?: string;
};

const InputText: React.FC<ArrayProps> = ({
  keySearch,
  data,
  title,
}) => {
  const [isSelected, setIsSelected] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const key = keySearch ?? 'label';

  const lowerHotels = search.toLocaleLowerCase();

  const Hotels = data.filter((input: string) =>
    input[key]?.toLocaleLowerCase().includes(lowerHotels),
  );

  // useEffect(() => {
  //   if (isSelected === isSelected)) {

  //   }
  // }, []);
  return (
    <>
      <label>{title}</label>
      <InputString
        placeholder="Destino"
        type="text"
        autoComplete="on"
        onClick={() => setIsOpen(!isOpen)}
        onChange={e => setSearch(e.target.value)}
        value={isSelected || search}
        list="lista"
      />
      <DataList id="lista" Open={isOpen}>
        {Hotels.map((item: string) => (
          <button onClick={() => setIsSelected(item?.[key])}>
            {item?.[key]}
          </button>
        ))}
      </DataList>
    </>
  );
};

export default InputText;
