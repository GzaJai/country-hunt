export const fetchData = (stateSetter) => {
  fetch('https://shadify.dev/api/countries/country-quiz')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data)
    stateSetter(data);
  })
}

