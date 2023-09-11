let favMovies = [
    {
      id: '0',
      title: 'thupaki',
      releaseDate: '2014'
    },
    {
      id: '1',
      title: 'veeram',
      releaseDate: '2019'
    },
    {
        id: '2',
        title: 'jailer',
        releaseDate: '2023'
    },
    {
        id: '3',
        title: 'jawaan',
        releaseDate: '2019'
    },
    {
        id: '4',
        title: 'DD returns',
        releaseDate: '2019'
    },
    {
        id: '5',
        title: 'enthiran',
        releaseDate: '2010'
    },
    {
        id: '6',
        title: 'vikram',
        releaseDate: '2020'
    },
    {
        id: '7',
        title: 'don',
        releaseDate: '2022'
    },
    {
        id: '8',
        title: 'varuthpadatha valibar sangam',
        releaseDate: '2019'
    },
    {
        id: '9',
        title: 'kadai kutty singam',
        releaseDate: '2019'
    }
  ];
  function makeMovieDiv(movie){
    const div=document.createElement('div')
    div.setAttribute('class', 'movie-card')

    const id= `movie-${movie['id']}`
    div.setAttribute('id', id)

    const h2=document.createElement('h2')
    h2.innerText=movie['title']

    const h3=document.createElement('h3')
    h3.innerText=movie['releaseDate']

    const button=document.createElement('button')
    const btnId= `movie-${movie['id']}`
    button.setAttribute('id', btnId)
    button.innerHTML='Delete'
    button.addEventListener('click', function(){
        console.log(btnId);
        div.remove();
    })

    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(button)

    return div;
  };

  function appendToSite(m){
    const site=document.querySelector('.site')
    site.appendChild(m)
  }

  for(let i=0;i<favMovies.length;i++){
    const movieDiv=makeMovieDiv(favMovies[i])
    appendToSite(movieDiv)
  }
  