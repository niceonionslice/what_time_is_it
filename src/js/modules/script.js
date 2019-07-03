const rooplabel = () => {
  document.querySelector(".main--title").innerHTML = dateNow();
}

const dateNow = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  // const milliseconds = date.getMilliseconds();
  const label = `今日は${year}/${month}/${day} ${hours}:${minutes}:${seconds}です。`;
  return label;
}

export default rooplabel;
