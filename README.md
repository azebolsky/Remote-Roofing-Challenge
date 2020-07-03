# Remote Roofing Challenge

For this application, you can view a list of movies and another list of series. View a high quality image for each title.

## Technologies Used:

- React
- JavaScript
- CSS

## How did you decide on the technical and architectural choices used as part of your solution?

I broke down the home, series, and movies page and found out what was necessary to create each. I decided to use the app.js as the home page since it made more sense to prevent too many components.

To retrieve the json feed, I used a fetch request in the useEffect() hook so that I could update when the page loads the first time. I passed an empty array as a second argument for the useEffect() so the effect runs and cleans only once. I also updated the state with the useEffect() fetch request as this was the most efficient way I found.

I used react hooks because I've mostly used class based components in my experience and I've been wanting to branch out more to hooks as they are the most efficient way to work with state in react.

## Are there any improvements you could make to your submission?

I could absolutely make some improvements. The Links used for the Movies and Series page remain when you're on the Movies or Series page. I ended up liking it so a user can switch to one or the other when they scroll to the bottom of the page.

I believe there is so much more I could do with styling to make the app look more pleasing to the user. Possibly use some more details from the movie and series items to create an individual page for each movie or series.

## What would you do differently if you were allocated more time?

With more time, I would redesign the app to make it more functional. Add more to the navbar so users can easily move between one page to another along with having an active status on the page you're currently on.

I would also add in a login and signup page so that users can create an account to see more information and possibly save their favorite movies or series. Allow all movies and series to be shown by using/learning more about pagination.
