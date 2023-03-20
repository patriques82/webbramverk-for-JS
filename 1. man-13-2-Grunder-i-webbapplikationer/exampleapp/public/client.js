(async () => {
  const data = await fetch('/data.json');
  const json = await data.json();

  const ul = document.createElement('ul')
  ul.setAttribute('class', 'notes')

  json.forEach(function (note) {
    const li = document.createElement('li')
    ul.appendChild(li)
    li.appendChild(document.createTextNode(note.content))
  })

  document.getElementById('notes').appendChild(ul)
})();
