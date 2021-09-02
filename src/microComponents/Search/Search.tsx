import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '..';
import {
  IcArrowLeftBlack,
  IcClose,
  IcHistoric,
  IcMap,
  IcSearch,
} from '../../icons';
import theme from '../../styles/colors';

import {
  Content,
  DataList,
  Historic,
  InputString,
  Label,
  Modal,
  NotFound,
  Row,
  SearchIcon,
} from './styles';

export type ArrayProps = {
  disabled?: boolean;
  keySearch?: string;
  onValue: any[];
  title?: string;
  placeholder?: string;
};

const Search: React.FC<ArrayProps> = ({
  keySearch,
  onValue,
  disabled,
  placeholder,
  title,
}) => {
  const [fullPage, setFullPage] = useState(false);
  const [inputSearch, setInputSearch] = useState('');
  const [openDataList, setOpenDataList] = useState(false);
  const [isSelected, setIsSelected] = useState<any>();
  const [listData, setListData] = useState<any>([]);
  const [lastSearches, setLastSearches] = useState<any>([]);

  const key = keySearch ?? 'label';

  useEffect(() => {
    const search = inputSearch.toLocaleLowerCase();

    setListData(
      onValue.filter((input: string) =>
        input[key]?.toLocaleLowerCase().includes(search),
      ),
    );
  }, [inputSearch]);

  const valueSearch =
    inputSearch === isSelected ? isSelected : inputSearch;

  const handleChange = useCallback((value: string) => {
    setInputSearch(value);
    value.length >= 2 && setOpenDataList(true);
  }, []);

  const handleFocus = () =>
    inputSearch.length > 0 && setOpenDataList(true);

  const handleSelected = (value: any) => {
    setInputSearch(value.label);
    setIsSelected(value);
    setOpenDataList(false);

    lastSearches.length === 3
      ? (lastSearches.shift(),
        setLastSearches([...lastSearches, value]))
      : lastSearches.includes(value)
      ? setLastSearches([...lastSearches])
      : setLastSearches([...lastSearches, value]);
  };

  const handleGoBack = useCallback(() => {
    setFullPage(false);
    setOpenDataList(false);
  }, []);

  return (
    <>
      {fullPage && (
        <Modal>
          <Row>
            <Button
              marginTop={4}
              variant="text"
              startIcon={IcArrowLeftBlack}
              onClick={() => handleGoBack()}
            />

            <Label>
              <InputString
                disabled={disabled}
                placeholder={placeholder}
                type="text"
                onChange={e => handleChange(e.target.value)}
                onFocus={() => handleFocus()}
                value={valueSearch}
                list="lista"
              />

              {valueSearch.length > 0 ? (
                <Button
                  marginTop={2}
                  variant="text"
                  onClick={() => handleChange('')}
                  startIcon={
                    valueSearch.length > 0 ? IcClose : IcSearch
                  }
                />
              ) : (
                <SearchIcon src={IcSearch} alt="IcSearch" />
              )}
            </Label>
          </Row>

          <Content>
            <DataList id="lista" open={openDataList}>
              {listData.map((item: string) => (
                <button
                  onClick={() => handleSelected(item)}
                  style={{
                    backgroundColor:
                      isSelected?.[key] === item?.[key]
                        ? `${theme.colors?.gray1}`
                        : 'transparent',
                  }}
                >
                  <h1>{item?.[key]}</h1>
                  <p>{item?.description}</p>
                </button>
              ))}

              {listData < 1 && (
                <NotFound>
                  <p>
                    (Nenhum resultado encontrado - por favor
                    tente novamente)
                  </p>
                </NotFound>
              )}
            </DataList>

            <Button variant="text" startIcon={IcMap}>
              Ao redor da minha localização
            </Button>

            {lastSearches.length > 0 && (
              <Historic>
                <h6>Destinos recentes</h6>

                {lastSearches.map(item => (
                  <div>
                    <img src={IcHistoric} />

                    <button>
                      <h1>{item.label}</h1>
                      <p>{item.description}</p>
                    </button>
                  </div>
                ))}
              </Historic>
            )}
          </Content>
        </Modal>
      )}

      <Label>
        <h1>{title}</h1>
        <InputString
          disabled={disabled}
          placeholder="Brasil"
          type="text"
          autoComplete="on"
          onClick={() => {
            {
              fullPage
                ? setOpenDataList(!openDataList)
                : setFullPage(true);
            }
          }}
          onChange={e => handleChange(e.target.value)}
          onBlur={() => setOpenDataList(!isSelected)}
          value={valueSearch}
          list="lista"
        />

        <DataList
          id="lista"
          open={openDataList}
          onBlur={() => setOpenDataList(false)}
        >
          {listData.length > 0 ? (
            listData.map((item: string) => (
              <button
                onClick={() => {
                  setInputSearch(item?.[key]);
                  setIsSelected(item?.[key]);
                }}
                // style={{
                //   backgroundColor:
                //     isSelected === item?.[key]
                //       ? '#c5c5c5'
                //       : 'transparent',
                // }}
              >
                {item?.[key]}
                <p>{item?.description}</p>
              </button>
            ))
          ) : (
            <NotFound>
              <p>
                (Nenhum resultado encontrado - por favor tente
                novamente)
              </p>
            </NotFound>
          )}
        </DataList>
      </Label>
    </>
  );
};

export default Search;
