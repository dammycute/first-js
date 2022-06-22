let print = document.querySelector('#print');
const country = 'Nigeria'
    height = '6.0ft'
    myName = 'Olawoore Damilola James'

print.innerHTML = `
    <h2>My name is: ${myName}</h2>
    <p>My height is: ${height}</p>
    <p>I am a ${country}n</p>
    <small><i>This is injected by javascript using innerHtML</i></small>
`