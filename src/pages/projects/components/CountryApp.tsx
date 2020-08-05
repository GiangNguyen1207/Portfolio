import React from 'react'

import countrypic from 'images/country_app.png'
import ProjectCard from 'components/ProjectCard'

const CountryApp = () => {
  const handleDemo = () => {
    window.open('https://countryapptrial.netlify.com')
  }

  const handleRepo = () => {
    window.open('https://github.com/GiangNguyen1207/CountryApp')
  }

  return (
    <ProjectCard
      title="Country App"
      pic={countrypic}
      text="A small web app built with Reactjs and Material UI. The web app
      allows users to search for countries by name and see the information
      of each country. Countries can also be sorted by each column, for
      example, name, languages, etc. Besides, customers can add all the
      countries they like into a favourite cart. "
      stacks="TypeScript, React, Redux(Thunk + Saga), Material UI"
      onClickDemo={handleDemo}
      onClickRepo={handleRepo}
    />
  )
}

export default CountryApp
