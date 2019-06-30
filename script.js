const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
// const milliseconds = date.getMilliseconds();
const label = `今日は${year}/${month}/${day} ${hours}:${minutes}:${seconds}です。`;


window.addEventListener('DOMContentLoaded', () => {
  document.querySelector(".main--title").innerHTML = label;  
})
