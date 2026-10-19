# Retro-Gaming-Console
Class Assignment.

Watchlist App
Repository Link: https://github.com/clustermoon/Retro-Gaming-Console

How this program works:
This program calls upon an API when the button is clicked, the code creates an 'XMLHttpRequest' object. This object then calls 'open("GET", url)' to start our signal connection to the API. Calling 'send()' fires the request, and the state change handler runs and once it reaches a 'readyState' of 4 we check for a status code of 200 (OK). With that we can parse the response text from a JSON object into a javascript object using the PARSE method and sending the consoles array of objects on to be rendered.

How the summary is created:
As each console is rendered, it's data object is pushed into an array named 'summary_list', so the list's length is the total number of consoles retrieved. Our 'update_summary' method then loops through the list once, comparing each item's year against the oldest and newest years seen so far and selects the maximal oldest and youngest items within the list. Then we concat a summary string using the two objects properties to compose a summary of oldest console -> newest console. 
