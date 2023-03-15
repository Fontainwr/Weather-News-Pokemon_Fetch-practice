window.addEventListener('load', () => {
  
  // If you remove the next line, it will show real data
  // dataSource.enableTestMode();

  // let newsData = dataSource.getNews("Science"));

  //NOTE: dataSource is an object that has 3 methods. 
  //1.) .getNews() = takes in topic and returns 25 news.
  //2.) .getWeather() = takes string of city (ect.Tokyo).
  //3.) .enableTestMoe() = takes in no parameters. For testing.  

  let weatherData = dataSource.getWeather("Tokyo"); 


  console.log(weatherData.hourly);

  let temperatureDiv = document.getElementById('temperature');
  temperatureDiv.innerText = "The current temperature in Tokyo is " + weatherData.tempC;

  let getTemperatureData = () => { 
    for ( let i = 0; i < weatherData.hourly.length; i++) {
      let  hourly = weatherData.hourly[i];
      let hourInformationDiv = document.createElement("div"); 
      document.body.append(hourInformationDiv);
      hourInformationDiv.innerText = hourly.tempC
    }
  }
  getTemperatureData();

// NEXT ONE!!!!!!!!!!!!!!!!!!!!!! [check "update", ]

// let newsData = dataSource.getNews("sports"); //<---How retrieve news artical?


// console.log(newsData.newsTestData);

// let newsDiv = document.getElementById('news');
// newsDiv.innerText = "In news today from Sapporo is:" + newsData.data;

// let getNewsData = () => { 
//   for ( let i = 0; i < newsData.newsTestData.length; i++) {
//     let  newsTestData = newsData.newsTestData[i];
//     let newsInformationDiv = document.createElement("div"); 
//     document.body.append(newsInformationDiv);
//     newsInformationDiv.innerText = newsTestData.data
//   }
// }
// getNewsData();


document.querySelector("#search").addEventListener("click", getPokemon); //<--in search section it will listen via a click and run getPokemon function. 

function capitalizeFirstLetter(string) { //<----Make the first character uppercase and ignor the rest as is.
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) { //<----This will help with typring letters to lower case translate. 
  return string.toLowerCase();
}


function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value; //<---location of name to use later. 
  const pokemonName = lowerCaseName(name); //<---for lowercase search 

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) //<---to get pokemon name using lower case with name
    .then((response) => response.json())//<--callback funtion for fufilled or rejected cases for the response
    .then((data) => { //<---Follow the function to find the art of the selected pokemon
      document.querySelector(".pokemonBox").innerHTML = 
      // Everything in the innerHTML will be in the "pokemon Box". using ${} helps us call the expression and product the value.
      //then we get the image via the location --> data.sprites.other(official artwork).front_default. 
      //
      //
      //
      `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos">
        <h1>NAME: ${capitalizeFirstLetter(data.name)}</h3>
        <p>height_inches: ${data.height}</p>
        <p>Weight_lb: ${data.weight}</p>
      </div>`;
    })
    .catch((err) => { //---> if unabme to find the name of the pokemon. 
      document.querySelector(".pokemonBox").innerHTML = `
      <h4>Sorry! Pokemon not found...try again</h4>
      `;
      console.log("Pokemon not found in database...sorry try again", err);
    });

  e.preventDefault(); //<----The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
}















});

























































// });
