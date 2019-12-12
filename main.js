import { url } from "./api.js"

const init = () => {
  fetch(url.endpoint, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(json => {
    document.getElementById("joke-id").innerHTML = json.joke;
    return json
  })
}

const renderNewJoke = () => {

  fetch(url.endpoint, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(json => {
    if(json.status === 200) {
      let joke = document.getElementById("joke-id")
      joke.setAttribute("class", "uk-animation-slide-right uk-animation-reverse uk-dark uk-heading-medium uk-margin-remove-bottom uk-padding")
      setTimeout(() => {
        joke.innerHTML = json.joke;
        joke.setAttribute("class", "uk-animation-slide-left uk-dark uk-heading-medium uk-margin-remove-bottom uk-padding")
      }, 200)

    }
  })


}
init()

document.getElementById("jokeNew").addEventListener("click", renderNewJoke);
