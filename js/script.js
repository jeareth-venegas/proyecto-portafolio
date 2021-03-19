// url del api de github
const linkGithub = 'https://api.github.com/users/jeareth-venegas/repos';

fetch(linkGithub)
  .then((response) => response.json())
  .then((data) => {
    const liInfo = document.querySelector('list__github');
    for (let i = 0; i < data.length; i += 1) {
    // li en html para el ul dentro del porfolio.html
      const li = document.createElement('li');
      liInfo.appendChild(li);
      // creo un a para hacer un href con el link del repo
      // una lista de todos los repositorio
      // cada uno tiene nombre y el link correspondiente
      //const nameRepository = document.createElement('a');
      //nameRepository.setAttribute('href', `${data[i].html_url}`);
      //nameRepository.innerHTML = data[i].name;
      //li.appendChild(nameRepository);
    //}
  //});


  // cambio del script aquí:
