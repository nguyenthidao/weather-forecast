/**
 * Created by dao on 5/23/17.
 */
function display(weather){
    var city_obj = document.getElementById("city-value");
    var humidity_obj = document.getElementById("humidity-value");
    var pressure_obj = document.getElementById("pressure-value");
    var visibility_obj = document.getElementById("visibility-value");

    humidity_obj.innerHTML = weather.get_humidity();
    pressure_obj.innerHTML = weather.get_pressure();
    visibility_obj.innerHTML = weather.get_visibility();
}