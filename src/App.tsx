import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FlexLayout from './layout/FlexLayout';
import AbsoluteContainer from './layout/AbsoluteContainer';
import Section from './layout/Section';
import SectionTitle from './UI/SectionTitle';
import InputField from './UI/InputField';
import SelectBox from './UI/SelectBox';

import debounce from './lib/debounce';
import httpFetch from './lib/httpClient';

import sickSlice from './store/sickArrSlice';

import { clearCookie, getCookieValue, setCookie } from './lib/httpCookie';

import type { RootStore } from './store/reduxStore';
import type { sickItem } from './store/sickArrSlice';

const debounceCallFn = debounce();

function App() {
  const [isShowSelectBox, setIsShowSelectBox] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const sickArr = useSelector((stateObj: RootStore) => stateObj.sickArr);
  const [relatedSickArr, setRelatedSickArr] = useState<sickItem[]>([]);

  const dispatch = useDispatch();

  const handleFocusInput = () => {
    return () => {
      setIsShowSelectBox(true);
    };
  };

  const handleBlurInput = () => {
    return () => {
      setIsShowSelectBox(false);
      setRelatedSickArr([]);
    };
  };

  const handleChangeInput = () => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);

      debounceCallFn(async () => {
        if (getCookieValue(event.target.value) === undefined && event.target.value.trim() !== '') {
          setCookie(event.target.value, event.target.value);

          const fetchedData = await httpFetch(event.target.value);
          dispatch(sickSlice.actions.addSickItem(fetchedData));
        }
      }, 1000);
    };
  };

  useEffect(() => {
    if (inputValue.trim() === '') setRelatedSickArr([]);

    if (isShowSelectBox && inputValue.trim() !== '') {
      setRelatedSickArr(sickArr.filter((sick) => sick.sickNm.includes(inputValue)).slice(0, 5));
    }
  }, [isShowSelectBox, setRelatedSickArr, sickArr, inputValue]);

  useEffect(() => {
    clearCookie();
  }, []);

  return (
    <>
      <Section backgroundColor='#CAE9FF'>
        <FlexLayout
          flexDirection='column'
          flexWrap='no-wrap'
          justifyContent='space-evenly'
          alignItems='center'
        >
          <SectionTitle>{`국내 모든 임상시험 검색하고\n온라인으로 참여하기`}</SectionTitle>
          <AbsoluteContainer>
            <InputField
              widthSize='430px'
              heightSize='50px'
              inputValue={inputValue}
              onFocus={handleFocusInput()}
              onBlur={handleBlurInput()}
              onChange={handleChangeInput()}
            />
            {isShowSelectBox && (
              <SelectBox options={relatedSickArr} topPosition='120%' inputValue={inputValue} />
            )}
          </AbsoluteContainer>
        </FlexLayout>
      </Section>
    </>
  );
}

export default App;
