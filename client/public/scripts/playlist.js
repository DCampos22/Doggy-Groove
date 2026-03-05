const renderPlaylist = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop())

  const response = await fetch('/playlists')
  const data = await response.json()

  const playlistContent = document.getElementById('playlist-content')

  let playlist

  if (data) {
    playlist = data.find(playlist => playlist.id === requestedID)
  }

  if (playlist) {
    document.getElementById('image').src = playlist.image
    document.getElementById('name').textContent = playlist.name
    document.getElementById('petType').textContent = 'Pet: ' + playlist.petType
    document.getElementById('mood').textContent = 'Mood: ' + playlist.mood
    document.getElementById('genre').textContent = 'Genre: ' + playlist.genre
    document.getElementById('energyLevel').textContent = 'Energy Level: ' + playlist.energyLevel
    document.getElementById('description').textContent = playlist.description
    document.getElementById('spotifyLink').innerHTML = `<a href="${playlist.spotifyLink}" target="_blank">🎵 Listen on Spotify</a>`
    document.title = `Doggy Groove - ${playlist.name}`
  } else {
    const message = document.createElement('h2')
    message.textContent = 'No Playlist Found 😞'
    playlistContent.appendChild(message)
  }
}

renderPlaylist()