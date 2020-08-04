import React from 'react'

import './styles.scss'

type Props = {
  label: string;
  handleButton: () => void;
};

const Button = ({ label, handleButton }: Props) => {
  return (
    <button className="button" onClick={handleButton}>
      {label}
    </button>
  )
}

export default Button
