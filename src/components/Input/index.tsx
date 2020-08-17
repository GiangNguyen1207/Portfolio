import React from 'react'

import './styles.scss'

type InputType = 'text' | 'textarea';

type Props = {
  label: string;
  type: InputType;
  onChangeText?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeArea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Input = ({ label, type, onChangeText, onChangeArea }: Props) => {
  return (
    <>
      {type === 'text' ? (
        <>
          <label htmlFor={label}>{label}</label>
          <input type="text" id={label} name={label} onChange={onChangeText} />
        </>
      ) : type === 'textarea' ? (
        <>
          <label htmlFor={label}>{label}</label>
          <textarea id={label} name={label} onChange={onChangeArea} />
        </>
      ) : null}
    </>
  )
}

export default Input
