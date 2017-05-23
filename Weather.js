/**
 * Created by dao on 5/23/17.
 */
function weather(){
    this.get_city = function () {
        return this.city;
    };
    this.set_city = function (city) {
        this.city = city;
    };
    this.get_icon_path = function () {
        return this.icon_path;
    };
    this.set_icon_path = function (icon_path) {
        this.icon_path = icon_path;
    };
    this.get_temperature = function () {
        return this.temperature;
    };
    this.set_temperature = function (temperature) {
        this.temperature = temperature;
    };
    this.get_humidity = function (humidity) {
        return this.humidity;
    };
    this.set_humidity = function (humidity) {
        this.humidity = humidity;
    };
    this.get_pressure = function (pressure) {
        return this.pressure;
    };
    this.set_pressure = function (pressure) {
        this.pressure = pressure;
    };
    this.get_visibility = function (visibility) {
        return this.visibility;
    };
    this.set_visibility = function (visibility) {
        this.visibility = visibility;
    };
}


