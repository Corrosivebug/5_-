alert("8.1")
let name = prompt("Введите название вашей любимой игры")
function favorite_game(){
    alert("Моя любимая игра " + name)
}
favorite_game()
alert("8.2")
let title = prompt("Введите название вашей любимой книга")
function favorite_book(){
    alert("Моя любимая книга " + title)
}
favorite_book()
alert("8.3")
let size = prompt("Введите размер желаймой вами футюолки")
let text = prompt("Введите текст на желаймой вами футюолки")
function T_shirt(){
    alert(`Купить футболку ${size} размера, с надписю ${text}`)
}
T_shirt()
alert("8.4")
let size_1 = "L"
let text_1 = "I love Java"
let size_2 = prompt("Введите размер желаймой вами футюолки")
let text_2 = prompt("Введите текст на желаймой вами футюолки")
function T_shirt_2(){
    alert(`Купить футболку ${size_2} размера, с надписю ${text_2} и футболку размера ${size_1} с принтом ${text_1}.`)
}
T_shirt_2()
let opis = "красивой, богатой и большой "
let country = prompt("Введите название страны")
let city = prompt(`Введите название города в ${country} `)
let country_2 = prompt("Введите название другой или тойже страны")
let city_2 = prompt(`Введите название города в ${country_2}`)
let country_3 = prompt("Введите название другой или тойже страны")
let city_3 = prompt(`Введите название города в ${country_3}`)
function describe_city(){
    alert(`Город ${city} находится в ${opis} стране под названием ${country}`)
    alert(`Город ${city_2} находится в ${opis} стране под названием ${country_2})`)
    alert(`Город ${city_3} находится в ${opis} стране под названием ${country_3})`)

}
describe_city(opis, country, city, country_2, city_2, country_3, city_32)