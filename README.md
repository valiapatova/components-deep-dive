# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

SWAPI
https://swapi.dev/api/people/1

HTTP 200 OK
Content-Type: application/json
Vary: Accept
Allow: GET, HEAD, OPTIONS

"results":[
{
    "name": "Luke Skywalker", 
    "height": "172", 
    "mass": "77", 
    "hair_color": "blond", 
    "skin_color": "fair", 
    "eye_color": "blue", 
    "birth_year": "19BBY", 
    "gender": "male", 
    "homeworld": "https://swapi.dev/api/planets/1/", 
    "films": [
        "https://swapi.dev/api/films/1/", 
        "https://swapi.dev/api/films/2/", 
        "https://swapi.dev/api/films/3/", 
        "https://swapi.dev/api/films/6/"
    ], 
    "species": [], 
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/", 
        "https://swapi.dev/api/vehicles/30/"
    ], 
    "starships": [
        "https://swapi.dev/api/starships/12/", 
        "https://swapi.dev/api/starships/22/"
    ], 
    "created": "2014-12-09T13:50:51.644000Z", 
    "edited": "2014-12-20T21:17:56.891000Z", 
    "url": "https://swapi.dev/api/people/1/"
}
]