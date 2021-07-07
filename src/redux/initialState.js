export const initialState = {
  projects: {
    data: [
      {
        id: "1",
        title: "REALMexico",
        description:
          "Final project of the Web Development Bootcamp - a full stack application for the local travel agency in Mexico. You can sort trips by regions and make reservation. All data placed in MongoDB data based. Fronted built with React, maintaing app state in Redux, applyng Redux-Thunk to communicate with backend ( API server created with Express).",
        technologies:
          "HTML, CSS, SASS, JS, React, React-Router, Redux, Redux-Thunk, Axios, Material UI, Express Node, MongoDB, Mongoose",
        code: "https://github.com/mwladyka126/REALMexico",
        link: "https://realmexico.herokuapp.com/",
        image: "/images/projects/realmex.jpg",
      },

      {
        id: "2",
        title: "room-for-you",
        description:
          " Bulletin board - full stack application for apparments adds, where you can add a new post or edit existing one. Frontend created with React. On the backend, API server created with Express with the main aim to serve static files for the frontend part, communication and operations on the data base, data base created with MongoDB and Mongoose,  user authentication with Google OAuth",
        technologies:
          " HTML, CSS, SASS, JS, React, React-Router, Redux, Redux-Thunk, Axios, Material UI Express Node, MongoDB, Mongoose",
        code: "https://github.com/mwladyka126/bulletinBoard",
        link: "https://room-for-you.herokuapp.com/",
        image: "/images/projects/roomforyou.jpg",
      },
      {
        id: "3",
        title: "Bazar",
        description:
          "Complex website for furniture store built with React as a group project of 7 developers under supervison of the project manager. Work organised in kanban system, using Jira, including dailies, weeklies and mutual code review.",
        technologies: "HTML, CSS, SASS, JS, React, React-Router, Redux",
        code: "https://github.com/mwladyka126/wdp-furniture-shop",
        link: "",
        image: "/images/projects/bazar.jpg",
      },
      {
        id: "4",
        title: "Music Festival App",
        description:
          "Full-stack application for the music festival and its booking system - the app shows only free tickets and updates tickets availability once new ticket is booked using Websockets. Frontend created with React; on the backend side API server built with Express. Concerts and bookings saved in MongoDB data base.",
        technologies:
          " HTML, CSS, SASS, JS, React, React-Router, Redux, Redux-Thunk, Axios, WebSocket, Express Node, MongoDB, Mongoose",
        code: "https://github.com/mwladyka126/MusicFestivalApp",
        link: "https://evening-depths-87320.herokuapp.com/",
        image: "/images/projects/festival.jpg",
      },
      {
        id: "5",
        title: "Around the world",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        technologies: " HTML, CSS, SASS, JS, React, React-Router, Redux",
        code: "https://github.com/mwladyka126/around-the-world",
        link: "https://travel-to-discover.herokuapp.com/",
        image: "/images/projects/aroundtheworld.jpg",
      },
      {
        id: "6",
        title: "administration-panel",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        technologies: "HTML, SCSS, JS",
        code: "https://github.com/mwladyka126/administration-panel",
        link: "https://mwladyka126.github.io/administration-panel",
        image: "/images/projects/adminpanel.jpg",
      },
    ],
  },
};
