const apikey = "83d0fd415bf145ff148e643995e003f0";
         const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
           //units=metric&q="  q=mumbai&APPID=83d0fd415bf145ff148e643995e003f0
        
       
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city) {
             const response = await fetch(apiUrl + city + `&appid=${apikey}`);
          
        
    if(response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } else {
                var data = await response.json();

                document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
        
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "image/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "image/clear.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "image/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "image/mist.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "image/rain.png";
            }
            else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "image/snow.png";
            }
          
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            } 
            
        }

          searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })

        document.addEventListener("DOMContentLoaded", function() {
            const date = new Date();
            const hour = date.getHours();
            const body = document.querySelector("body");
            let background = "";
 
            // let weather = "";

            // // Set your custom date and time here
            // const customDate = new Date(2024, 3, 5, 19); // March 5, 2024, 2:00 PM
          
            if (hour >= 6 && hour < 12) { // Morning (6:00 AM to 11:59 AM)
              background = "image/image1.jpg";
            } else if (hour >= 12 && hour < 18) { // Afternoon (12:00 PM to 5:59 PM)
              background = "image/image2.jpg";
            } else if (hour >= 18 && hour < 24) { // Evening (6:00 PM to 11:59 PM)
              background = "image/image5.jpg";
            } else { // Night
              background = "image/image3.jpg";
            }
          
             //body.style.backgroundImage = `url(image/black.jpg)`;
            // body.style.backgroundColor = linear-gradiant(blue, balck)
          });
          