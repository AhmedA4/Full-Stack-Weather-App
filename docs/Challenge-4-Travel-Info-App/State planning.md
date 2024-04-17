| DATA | WHERE? | WHY? |
| ---- | ---- | ---- |
| searchText | App | The text in the search bar will need to be passed to all three pages, so it is important for it to be in App so that that is possible |
| favourites | App | All three pages need to know which cities are currently added to the "Favourites, therefore having this state in App is key |
| weatherData | WeatherPage | This is only needed on the WeatherPage because that is the only place that weather info is presented |
| days | WeatherPage | This is only needed on the WeatherPage because that is the only place that weather info is presented |
| cityName | WeatherPage | This needs to be here because it is the only page where info regarding the current selected city is being presented |
| currentDay | WeatherPage | This is only needed on the WeatherPage because that is the only place that weather info is presented |
| currentDayWeatherDesc | WeatherPage | This is only needed on the WeatherPage because that is the only place that weather info is presented |
| currentDayTemp | WeatherPage | This is only needed on the WeatherPage because that is the only place that weather info is presented |
| currentWeatherIcon | WeatherPage | This is only needed on the WeatherPage because that is the only place that weather info is presented |
| locationIsSaved | WeatherPage | Only needed on this page for the bookmark functionality |
