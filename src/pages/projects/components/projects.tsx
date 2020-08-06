import eventapp from 'images/event_hacker.png'
import countryapp from 'images/country_app.png'

export const projects = [
  {
    title: 'Event hacker',
    pic: eventapp,
    description:
      'A small web app built with Reactjs and Bootstrap. The web app allows users to search for events by category, name or location and see the details of their chosen events.',
    stacks: 'JavaScript, React, Bootstrap',
    demoLink: 'https://eventhacker.herokuapp.com',
    repoLink: 'https://github.com/GiangNguyen1207/Event-hacker',
  },
  {
    title: 'Country App',
    pic: countryapp,
    description:
      'A small web app built with Reactjs and Material UI. The web app allows users to search for countries by name and see the information of each country. Countries can also be sorted by each column, for example, name, languages, etc. Besides, customers can add all the countries they like into a favourite cart.',
    stacks: 'TypeScript, React, Redux(Thunk + Saga), Material UI',
    demoLink: 'https://countryapptrial.netlify.com',
    repoLink: 'https://github.com/GiangNguyen1207/CountryApp',
  },
]
