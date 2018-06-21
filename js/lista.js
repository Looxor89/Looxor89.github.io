console.log("Pagina lista!")

var SERVICE_URL = "https://jsonplaceholder.typicode.com"
var Person = {
    "name": "Pippo",
    "age": 25,
    "children": [{
            "name": "Aldo",
            "age": 8
        },
        {
            "name": "Francesco",
            "age": 4
        }
    ],
    "partner": {
        "name": "Carlo",
        "age": 34
    }
}
console.log(Person.name, Person.children[0].name)