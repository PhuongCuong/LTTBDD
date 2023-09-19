fetch('https://api.rootnet.in/covid19-in/stats/latest')
    .then((response) => response.json())
    .then((json) => console.log(json));