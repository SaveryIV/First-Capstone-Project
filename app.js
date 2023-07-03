const $body = document.querySelector('body');
const $hamburger = document.querySelector('.hamburger');
const $navList = document.querySelector('.nav-list');
const $closeX = document.querySelector('.close-hamburger');
const $links = document.querySelectorAll('.menu-links');
const performers = [{
  class: 'skrillex',
  name: 'Skrillex',
  status: 'Lorem ipsum, Lorem ipsum, Lorem ipsum',
  description: 'Lorem ipsum Lorem ipsum Lorem ipsum',
  image: 'sources/images/skrillex2.jpg',
}, {
  class: 'marshmello',
  name: 'Marshmello',
  status: 'Lorem ipsum, Lorem ipsum, Lorem ipsum',
  description: 'Lorem ipsum Lorem ipsum Lorem ipsum',
  image: 'sources/images/Marshmello3.jpg',
}, {
  id: 'id="ice"',
  class: 'ice',
  name: 'Ice Cube',
  status: 'Lorem ipsum, Lorem ipsum, Lorem ipsum',
  description: 'Lorem ipsum Lorem ipsum Lorem ipsum',
  image: 'sources/images/Ice Cube2.jpg',
}, {
  id: 'id="em"',
  class: 'eminem',
  name: 'Eminem',
  status: 'Lorem ipsum, Lorem ipsum, Lorem ipsum',
  description: 'Lorem ipsum Lorem ipsum Lorem ipsum',
  image: 'sources/images/Eminem2.jpg',
}, {
  id: 'id="avi"',
  class: 'avicii',
  name: 'Avicii',
  status: 'Lorem ipsum, Lorem ipsum, Lorem ipsum',
  description: 'Lorem ipsum Lorem ipsum Lorem ipsum',
  image: 'sources/images/Avicii.jpg',
}, {
  id: 'id="post"',
  class: 'post',
  name: 'Post Malone',
  status: 'Lorem ipsum, Lorem ipsum, Lorem ipsum',
  description: 'Lorem ipsum Lorem ipsum Lorem ipsum',
  image: 'sources/images/post-malone2.jpg',
}];

const $artists = document.querySelector('.container-speakers');
// eslint-disable-next-line no-plusplus
for (let i = 0; i < performers.length; i++) {
  $artists.innerHTML += `
        <div class="speaker" ${performers[i].id}>
            <div class="square-container">
                <div class="grey-square"></div>
                <img class="img-speaker" src="${performers[i].image}" alt="${`${performers[i].name}-photo`}">
            </div>
            <div class="speaker-text">
                <h1>${performers[i].name}</h1>
                <p class="job">${performers[i].status}</p>
                <div class="small-grey-line"></div>
                <p class="description">${performers[i].description}</p>
            </div>
        </div>
    `;
}
const $buttonArtists = document.querySelector('.button-artists');
const $ice = document.querySelector('#ice');
const $em = document.querySelector('#em');
const $avi = document.querySelector('#avi');
const $post = document.querySelector('#post');
$ice.style.display = 'none';
$em.style.display = 'none';
$avi.style.display = 'none';
$post.style.display = 'none';
if (window.innerWidth > 768) {
  $ice.style.display = 'flex';
  $em.style.display = 'flex';
  $avi.style.display = 'flex';
  $post.style.display = 'flex';
  $buttonArtists.style.display = 'none';
}

$buttonArtists.addEventListener('click', () => {
  $ice.style.display = 'flex';
  $em.style.display = 'flex';
  $avi.style.display = 'flex';
  $post.style.display = 'flex';
  $buttonArtists.style.display = 'none';
});

$hamburger.addEventListener('click', () => {
  $navList.style.display = 'flex';
  $hamburger.style.display = 'none';
  $body.style.overflow = 'hidden';
});

$closeX.addEventListener('click', () => {
  $navList.style.display = 'none';
  $hamburger.style.display = '';
  $body.style.overflow = 'scroll';
});

$links.forEach((i) => {
  i.addEventListener('click', () => {
    $navList.style.display = 'none';
    $hamburger.style.display = '';
    $body.style.overflow = 'scroll';
  });
});