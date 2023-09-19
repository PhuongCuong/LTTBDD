// Get a user
var url = 'https://api.covidtracking.com/v1/us';
var xhr = new XMLHttpRequest()
xhr.open('GET', url + '/daily.json', true)
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);