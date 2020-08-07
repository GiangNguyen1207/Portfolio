import React from 'react'

import './styles.scss'

type ButtonType = 'big' | 'small';

type Props = {
  label: string;
  type: ButtonType;
  handleButton: () => void;
};

const Button = ({ label, handleButton, type }: Props) => {
  return (
    <button className={`button button--${type}`} onClick={handleButton}>
      {label}
    </button>
  )
}

export default Button
