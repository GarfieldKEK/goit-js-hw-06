const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector(".gallery")
const cat = document.createElement("li")
const catImg = document.createElement("img")
catImg.src = images[0].url
catImg.alt = images[0].alt
cat.insertAdjacentElement("beforeend", catImg)

const koiFish = document.createElement("li")
const koiFishImg = document.createElement("img")
koiFishImg.src = images[1].url
koiFishImg.alt = images[1].alt
koiFish.insertAdjacentElement("beforeend", koiFishImg)

const horses = document.createElement("li")
const horsesImg = document.createElement("img")
horsesImg.src = images[2].url
horsesImg.alt = images[2].alt
horses.insertAdjacentElement("beforeend", horsesImg)

gallery.append(cat, koiFish, horses)
