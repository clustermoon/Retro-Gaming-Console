# Retro-Gaming-Console
Class Assignment.


Watchlist App
Repository Link: https://github.com/clustermoon/movie-watchlist

Movie Properties:
Each movie is an object with three properties: title (string), genre(string from drop down options), and watched (boolean).
All Movies are kept in the watchlist.

Method:
The watchlist object has a 'toggleWatched' method that flips the watched boolean of that movie at that index within the movie array. 
The mark watched / unwatched button calls this method along with a re-render so the status updates.


Savind and Loading:
The method 'SaveMovies' converts the movies array to a string and using JSON stringify we store it in localstorage.
The method 'LoadMovies' takes the saved data within the localstorage and constructs movie objects out of the stringified data. 
The loading is wrapped in a try catch in case the data we attempt to deserialize is bad. 
