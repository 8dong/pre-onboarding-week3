import React from 'react';
import styled from 'styled-components';

const InputField = ({
  onFocus,
  onBlur,
  onChange,
  inputValue,
  widthSize,
  heightSize
}: {
  onFocus: () => void;
  onBlur: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  widthSize: string;
  heightSize: string;
}) => {
  return (
    <InputFieldWrapper
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      value={inputValue}
      widthSize={widthSize}
      heightSize={heightSize}
    />
  );
};

const InputFieldWrapper = styled.input<{ widthSize: string; heightSize: string }>`
  width: ${(props) => props.widthSize};
  height: ${(props) => props.heightSize};
  padding: 0 20px;

  border-radius: 10px;

  background-color: #fff;
`;

export default InputField;
