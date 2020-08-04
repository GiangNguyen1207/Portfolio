import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import './style.scss'

const Footer = () => {
  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/giang-nguyen-aa8161106')
  }

  const handleGitHub = () => {
    window.open('https://github.com/GiangNguyen1207')
  }

  return (
    <div className="footer-container">
      <div className="footer-grid">
        <div>
          <button onClick={handleLinkedIn}>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              style={{ marginRight: '1%' }}
            />
          </button>
          <button onClick={handleGitHub}>
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
