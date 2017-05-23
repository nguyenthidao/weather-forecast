/**
 * Created by dao on 5/23/17.
 */

function get_weather_data(){
    var query = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=1818a39518ef9bb75b3f51d27a231e56';
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", query);
    xhttp.send();
}

get_weather_data();
