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
    <div
      className={`alert-container alert-container--${
        toggleAlert ? '' : 'hide'
      }`}
    >
      <div
        className={`alert-card alert-card--${
          type === 'success' ? 'success' : 'failure'
        }`}
      >
        {/* {type === 'success' && (
          <Icon icon={checkCircle} size={60} className="success-icon" />
        )}
        {(type === 'warning' || type === 'warningFinish') && (
          <Icon icon={exclamationTriangle} size={60} className="warning-icon" />
        )} */}
        <Description text={text!} type="center" />
      </div>
    </div>
  )
}

export default Alert
