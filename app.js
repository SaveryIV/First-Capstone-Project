const $body = document.querySelector('body');
const $hamburger = document.querySelector('.hamburger');
const $navList = document.querySelector('.nav-list');
const $closeX = document.querySelector('.close-hamburger');
const $links = document.querySelectorAll('.menu-links');
const performers = [{
  class: 'skrillex',
  name: 'Skrillex',
  status: 'DJ, producer, Grammy winner; Dubstep pioneer, Bangarang, OWSLA founder.',
  description: 'Sonny Moore, known as Skrillex, began as the lead vocalist of post-hardcore band From First to Last before transitioning to electronic music and revolutionizing the dubstep genre.',
  image: 'sources/images/skrillex.jpg',
}, {
  class: 'marshmello',
  name: 'Marshmello',
  status: 'DJ, producer, masked identity; Happier, collaborations, EDM superstar.',
  description: "With a mysterious persona, Marshmello's true identity remains undisclosed, adding an air of intrigue to his rise in the EDM world.",
  image: 'sources/images/Marshmello2.jpg',
}, {
  id: 'id="ice"',
  class: 'ice',
  name: 'Ice Cube',
  status: 'Rapper, actor, producer; N.W.A., Friday, Straight Outta Compton.',
  description: 'Born in South Central Los Angeles, Ice Cube emerged from the gangsta rap scene, co-founding N.W.A. and becoming a prominent voice in West Coast hip-hop.',
  image: 'sources/images/Ice Cube.jpg',
}, {
  id: 'id="em"',
  class: 'eminem',
  name: 'Eminem',
  status: 'Rapper, songwriter, record producer; The Marshall Mathers LP, Grammy winner.',
  description: 'Hailing from Detroit, Eminem overcame a troubled upbringing to become a rap sensation, known for his raw and honest storytelling.',
  image: 'sources/images/Eminem.jpg',
}];

const $artists = document.querySelector('.container-speakers');
// eslint-disable-next-line no-plusplus
for (let i = 0; i < performers.length; i++) {
  $artists.innerHTML += `
        <div class="speaker" ${performers[i].id}>
            <div class="${performers[i].class}">
                <img src="${performers[i].image}" alt="${`${performers[i].name}-photo`}" class="img-speaker">
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
$ice.style.display = 'none';
$em.style.display = 'none';
if (window.innerWidth > 768) {
  $ice.style.display = 'flex';
  $em.style.display = 'flex';
  $buttonArtists.style.display = 'none';
}

$buttonArtists.addEventListener('click', () => {
  $ice.style.display = 'flex';
  $em.style.display = 'flex';
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