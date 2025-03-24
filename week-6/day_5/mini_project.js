// const robots = [
//     {
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz',
//       image: 'cat1.png'
//     },
//     {
//       id: 2,
//       name: 'Ervin Howell',
//       username: 'Antonette',
//       email: 'Shanna@melissa.tv',
//       image: 'cat2.png'
//     },
//     {
//       id: 3,
//       name: 'Clementine Bauch',
//       username: 'Samantha',
//       email: 'Nathan@yesenia.net',
//       image: 'cat3.png'
//     },
//     {
//       id: 4,
//       name: 'Patricia Lebsack',
//       username: 'Karianne',
//       email: 'Julianne.OConner@kory.org',
//       image: 'cat4.png'
//     },
//     {
//       id: 5,
//       name: 'Chelsey Dietrich',
//       username: 'Kamren',
//       email: 'Lucio_Hettinger@annie.ca',
//       image: 'cat5.png'
//     },
//     {
//       id: 6,
//       name: 'Mrs. Dennis Schulist',
//       username: 'Leopoldo_Corkery',
//       email: 'Karley_Dach@jasper.info',
//       image: 'cat6.png'
//     },
//     {
//       id: 7,
//       name: 'Kurtis Weissnat',
//       username: 'Elwyn.Skiles',
//       email: 'Telly.Hoeger@billy.biz',
//       image: 'cat7.png'
//     },
//     {
//       id: 8,
//       name: 'Nicholas Runolfsdottir V',
//       username: 'Maxime_Nienow',
//       email: 'Sherwood@rosamond.me',
//       image: 'cat8.png'
//     },
//     {
//       id: 9,
//       name: 'Glenna Reichert',
//       username: 'Delphine',
//       email: 'Chaim_McDermott@dana.io',
//       image: 'cat9.png'
//     },
//     {
//       id: 10,
//       name: 'Clementina DuBuque',
//       username: 'Moriah.Stanton',
//       email: 'Rey.Padberg@karina.biz',
//       image: 'cat10.png'
//     }
// ];

// const robots = [
//     {
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz',
//       image: 'https://robohash.org/1?200x200'
//     },
//     {
//       id: 2,
//       name: 'Ervin Howell',
//       username: 'Antonette',
//       email: 'Shanna@melissa.tv',
//       image: 'https://robohash.org/2?200x200'
//     },
//     {
//       id: 3,
//       name: 'Clementine Bauch',
//       username: 'Samantha',
//       email: 'Nathan@yesenia.net',
//       image: 'https://robohash.org/3?200x200'
//     },
//     {
//       id: 4,
//       name: 'Patricia Lebsack',
//       username: 'Karianne',
//       email: 'Julianne.OConner@kory.org',
//       image: 'https://robohash.org/4?200x200'
//     },
//     {
//       id: 5,
//       name: 'Chelsey Dietrich',
//       username: 'Kamren',
//       email: 'Lucio_Hettinger@annie.ca',
//       image: 'https://robohash.org/5?200x200'
//     },
//     {
//       id: 6,
//       name: 'Mrs. Dennis Schulist',
//       username: 'Leopoldo_Corkery',
//       email: 'Karley_Dach@jasper.info',
//       image: 'https://robohash.org/6?200x200'
//     },
//     {
//       id: 7,
//       name: 'Kurtis Weissnat',
//       username: 'Elwyn.Skiles',
//       email: 'Telly.Hoeger@billy.biz',
//       image: 'https://robohash.org/7?200x200'
//     },
//     {
//       id: 8,
//       name: 'Nicholas Runolfsdottir V',
//       username: 'Maxime_Nienow',
//       email: 'Sherwood@rosamond.me',
//       image: 'https://robohash.org/8?200x200'
//     },
//     {
//       id: 9,
//       name: 'Glenna Reichert',
//       username: 'Delphine',
//       email: 'Chaim_McDermott@dana.io',
//       image:'https://robohash.org/9?200x200'
//     },
//     {
//       id: 10,
//       name: 'Clementina DuBuque',
//       username: 'Moriah.Stanton',
//       email: 'Rey.Padberg@karina.biz',
//       image:'https://robohash.org/10?200x200'
//     }
//     ];

// function createCards(obj){
//     let main = document.getElementById('main')
//     obj.forEach(item => {
//         let card = document.createElement('div');
//         card.classList = 'card';
//         let circle = document.createElement('div');
//         circle.classList = 'circle';
//         let robot = document.createElement('img');
//         robot.classList = 'image';
//         robot.src = item.image
//         robot.alt = item.username
//         let robotName = document.createElement('h3');
//         robotName.textContent = item.name
//         robotName.classList = 'robotName'
//         let robotEmail = document.createElement('div');
//         robotEmail.textContent = item.email
//         robotEmail.classList = 'robotEmail'
//         main.appendChild(card)
//         circle.appendChild(robot)
//         card.appendChild(circle)
//         card.appendChild(robotName)
//         card.appendChild(robotEmail)
//     });
// };
// createCards(robots)

// let searchbar = document.getElementById('searchbar')
// searchbar.addEventListener('keydown', function(e) {
//     if (e.key === 'Enter'){
//         e.preventDefault();
//         let userSearch = searchbar.value.toLowerCase();
//         let robotCards = document.querySelectorAll('.card')
//         robotCards.forEach(card => {
//             let robotName = card.querySelector('.robotName').textContent.toLowerCase();
//             if (robotName.includes(userSearch)) {
//                 card.classList.remove('hidden');
//             } else {
//                 card.classList.add('hidden');
//             }            
//         });
//     }
// })


// const robots = [
//   {
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz',
//       image: 'https://robohash.org/1?200x200'
//   },
//   {
//       id: 2,
//       name: 'Ervin Howell',
//       username: 'Antonette',
//       email: 'Shanna@melissa.tv',
//       image: 'https://robohash.org/2?200x200'
//   },
//   {
//       id: 3,
//       name: 'Clementine Bauch',
//       username: 'Samantha',
//       email: 'Nathan@yesenia.net',
//       image: 'https://robohash.org/3?200x200'
//   },
//   {
//       id: 4,
//       name: 'Patricia Lebsack',
//       username: 'Karianne',
//       email: 'Julianne.OConner@kory.org',
//       image: 'https://robohash.org/4?200x200'
//   },
//   {
//       id: 5,
//       name: 'Chelsey Dietrich',
//       username: 'Kamren',
//       email: 'Lucio_Hettinger@annie.ca',
//       image: 'https://robohash.org/5?200x200'
//   },
//   {
//       id: 6,
//       name: 'Mrs. Dennis Schulist',
//       username: 'Leopoldo_Corkery',
//       email: 'Karley_Dach@jasper.info',
//       image: 'https://robohash.org/6?200x200'
//   },
//   {
//       id: 7,
//       name: 'Kurtis Weissnat',
//       username: 'Elwyn.Skiles',
//       email: 'Telly.Hoeger@billy.biz',
//       image: 'https://robohash.org/7?200x200'
//   },
//   {
//       id: 8,
//       name: 'Nicholas Runolfsdottir V',
//       username: 'Maxime_Nienow',
//       email: 'Sherwood@rosamond.me',
//       image: 'https://robohash.org/8?200x200'
//   },
//   {
//       id: 9,
//       name: 'Glenna Reichert',
//       username: 'Delphine',
//       email: 'Chaim_McDermott@dana.io',
//       image: 'https://robohash.org/9?200x200'
//   },
//   {
//       id: 10,
//       name: 'Clementina DuBuque',
//       username: 'Moriah.Stanton',
//       email: 'Rey.Padberg@karina.biz',
//       image: 'https://robohash.org/10?200x200'
//   }
// ];


// // let robotsJSON = JSON.stringify(robots, null, 2)
// // console.log(robotsJSON)


// let cardsHolder = document.createElement('div')
// cardsHolder.setAttribute('id', 'cardsHolder')
// document.body.appendChild(cardsHolder)

// // createRobotCard(robots)
// function createRobotCard(frobots) {
//   cardsHolder.innerHTML = ""
//     let card = document.createElement('div')
//     card.setAttribute('id', 'card')

//     let img = document.createElement("img");
//     img.src = robot.image;
//     card.appendChild(img)

//     let title = document.createElement('h2');
//     title.textContent = robot.name;
//     card.appendChild(title);

//     let email = document.createElement('h4');
//     email.textContent = robot.email;
//     card.appendChild(email);
//     cardsHolder.appendChild(card);

    
// }

// robots.forEach(createRobotCard);

// let searchInput = document.getElementById('search');
// searchInput.addEventListener("input", function (event) {
//   let searchValue = event.target.value
//   let filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchValue));
//   createRobotCard(filteredRobots);
// })


const robots = [
  {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
  },
  {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
  },
  {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
  },
  {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
  },
  {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
  },
  {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
  },
  {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
  },
  {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
  },
  {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image: 'https://robohash.org/9?200x200'
  },
  {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image: 'https://robohash.org/10?200x200'
  }
];


// let robotsJSON = JSON.stringify(robots, null, 2)
// console.log(robotsJSON)


let cardsHolder = document.createElement('div')
cardsHolder.setAttribute('id', 'cardsHolder')
document.body.appendChild(cardsHolder)

// createRobotCard(robots)
function createRobotCard(robot) {

  let card = document.createElement('div')
  card.setAttribute('id', 'card')

  let img = document.createElement("img");
  img.src = robot.image;
  card.appendChild(img)

  let title = document.createElement('h2');
  title.textContent = robot.name;
  card.appendChild(title);

  let email = document.createElement('h4');
  email.textContent = robot.email;
  card.appendChild(email);
  cardsHolder.appendChild(card);

}

robots.forEach(createRobotCard);

let searchInput = document.getElementById('search');
searchInput.addEventListener("input", function () {
  let searchValue = searchInput.value.toLowerCase();
  let filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchValue));
  cardsHolder.innerHTML = ""
  filteredRobots.forEach(createRobotCard)
})