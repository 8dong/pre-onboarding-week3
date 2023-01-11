import styled from 'styled-components';

import type { sickItem } from '../store/sickArrSlice';

const SelectBox = ({
  options,
  inputValue,
  topPosition
}: {
  options: sickItem[];
  inputValue: string;
  topPosition: string;
}) => {
  const transformedOptions = options.map((option) => {
    const boldTextArr = option.sickNm.split(inputValue);

    return {
      sickCd: option.sickCd,
      sickNm: [boldTextArr[0], inputValue, boldTextArr[1]]
    };
  });

  return (
    <SelectBoxWrapper topPosition={topPosition}>
      {transformedOptions.map((option) => (
        <SelectItem key={option.sickCd}>
          {option.sickNm[0]}
          <strong>{option.sickNm[1]}</strong>
          {option.sickNm[2]}
        </SelectItem>
      ))}
    </SelectBoxWrapper>
  );
};

const SelectBoxWrapper = styled.ul<{ topPosition: string }>`
  width: 100%;

  border-radius: 10px;

  position: absolute;
  top: ${(props) => props.topPosition};

  background-color: #fff;
`;

const SelectItem = styled.li`
  margin: 10px 0;
  padding: 0 10px;
`;

export default SelectBox;
