const swapiGetResult = () => {
  const result = document.querySelector("#swapi--result");

  fetch('https://swapi.co/api/people/2/', {
    method: 'GET'
  }).then((response) => {
    if (response.status !== 200) {
      throw 'エラーですわ！'
    }
    return response.json();
  })
  .then((objs) => {
    console.log(objs);
    // ここでDOM捜査 実はここにコールバック関数とか？
    result.innerText = objs.name;
  })
  .catch((err) => {
    console.log(err);
  });
};

export default swapiGetResult;
