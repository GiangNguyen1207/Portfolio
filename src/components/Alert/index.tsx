import React from 'react'

import Description from 'components/Description'
import './styles.scss'

type AlertVariant = 'success' | 'failure' | null;

type Props = {
  toggleAlert: boolean;
  text: string;
  type: AlertVariant;
};

const Alert = ({ toggleAlert, text, type }: Props) => {
  return (
    <div className={`alert-card alert-card--${toggleAlert ? '' : 'hide'}`}>
      <div
        className={`alert-type alert-type--${
          type === 'success' ? 'success' : 'failure'
        }`}
      >
        <Description text={text!} type="center" />
      </div>
    </div>
  )
}

export default Alert
