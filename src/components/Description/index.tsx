import React from 'react'

import './styles.scss'

type DescriptionType = 'center' | 'left';

type Props = {
  text: string;
  type: DescriptionType;
};

const Description = ({ text, type }: Props) => {
  return <p className={`description description--${type}`}>{text}</p>
}

export default Description
