import React from 'react'
import './styles.scss'

export type HeadingType = 'primary' | 'secondary' | 'normal' | 'colorful';

type Props = {
  title: string;
  type: HeadingType;
};

const Heading = ({ title, type }: Props) => {
  return (
    <>
      <p className={type}>{title}</p>
    </>
  )
}

export default Heading
