const renderPlaylists = async () => {
  const response = await fetch('/playlists')
  const data = await response.json()

  const mainContent = document.getElementById('main-content')

  if (data) {
    data.map(playlist => {
      const card = document.createElement('div')
      card.classList.add('card')

      const topContainer = document.createElement('div')
      topContainer.classList.add('top-container')
      topContainer.style.backgroundImage = `url(${playlist.image})`

      const bottomContainer = document.createElement('div')
      bottomContainer.classList.add('bottom-container')

      const name = document.createElement('h3')
      name.textContent = playlist.name
      bottomContainer.appendChild(name)

      const mood = document.createElement('p')
      mood.textContent = 'Mood: ' + playlist.mood
      bottomContainer.appendChild(mood)

      const genre = document.createElement('p')
      genre.textContent = 'Genre: ' + playlist.genre
      bottomContainer.appendChild(genre)

      const energyLevel = document.createElement('p')
      energyLevel.textContent = 'Energy: ' + playlist.energyLevel
      bottomContainer.appendChild(energyLevel)

      const link = document.createElement('a')
      link.textContent = 'Read More >'
      link.setAttribute('role', 'button')
      link.href = `/playlists/${playlist.id}`
      bottomContainer.appendChild(link)

      card.appendChild(topContainer)
      card.appendChild(bottomContainer)
      mainContent.appendChild(card)
    })
  } else {
    const message = document.createElement('h2')
    message.textContent = 'No Playlists Available 😞'
    mainContent.appendChild(message)
  }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderPlaylists()
}