export const fetchData = (stateSetter) => {
  fetch('https://country-hunt-api.vercel.app/')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data)
    stateSetter(data);
  })
}

