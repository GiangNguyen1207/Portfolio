import eventapp from 'assets/images/event_hacker.png'
import countryapp from 'assets/images/country_app.png'
import esrapplicant from 'assets/images/esr_applicant.png'
import ecommerce from 'assets/images/e_commerce.png'
import emory from 'assets/images/emory.png'

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
    stacks: 'TypeScript, React, Redux(Thunk + Saga), Material UI, Docker',
    demoLink: 'https://countryapptrial.netlify.com',
    repoLink: 'https://github.com/GiangNguyen1207/CountryApp',
  },
  {
    title: 'E-commerce',
    pic: ecommerce,
    description:
      'It is an e-commerce project that was built based on the inspiration from FOREO. The project contained front-end and back-end development, backed by MongoDB. It supports all the functions of a e-commerce website, for example, users can sign in/sign up manually or login with Google, search for products, see the details of the products, add products to cart, and check out the total fee, etc.',
    stacks:
      'TypeScript, React, Redux, Material UI, Node, Express, MongoDB, REST API, Jest',
  },
  {
    title: 'ESR Applicant',
    pic: esrapplicant,
    description:
      'This project is conducted by Integrify Oy. It is an application built for students and external users to take exams organized by Integrify. This is a group project.',
    stacks: 'TypeScript, React, Redux',
  },
  {
    title: 'Emory',
    pic: emory,
    description:
      'Emory is a modern diary app. It allows you to store all of your daily activities and emotions using interactive icons or pictures. Besides, you can also track your mood index throughout a month with the support of our mood graph.',
    stacks: 'Java, Android Studio',
    demoLink:
      'https://www.youtube.com/watch?v=lXGb_AlDxrY&feature=youtu.be&ab_channel=ThuyMyMai',
    repoLink: 'https://github.com/GiangNguyen1207/emory',
  },
]
