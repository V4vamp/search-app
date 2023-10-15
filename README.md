# React Search App

This React app is a simple web application for searching people and managing your favorite profiles. It offers a user-friendly interface and seamless navigation. The app can be easily launched using `npm start` and runs on `localhost:3000`.

## Features

### Landing Page

The landing page is the starting point of the app, featuring a navigation bar with links to three main sections: "Search," "Signals," and "Recent Searches."

- "Search for People" button: Takes you to the Search page.
- "My Signals" button: Provides access to your favorite profiles.

### Search Page

The Search page allows you to search for people by entering a search query in the input field. After typing the desired name (e.g., "Tony") and hitting Enter or clicking the search icon, the app displays profiles that match the query.

Each profile card includes the following information:

- User's avatar
- Name
- A link to their professional genome
- A "Signal" button to add the profile to your favorites.

By clicking "View User's Genome," you can access the user's professional genome or the Torre AI website. To signal that you've favorited a profile, click the "Signal" button, which will change to "Signaled."

### Signals

The "Signals" section, accessible from the Navbar, displays all the profiles you have favorited. Clicking on a "Signaled" profile allows you to remove it from your favorites.

### Navigation

To navigate between sections, you can:

- Click on the Torre logo in the top left corner of the Navbar to return to the Landing page.
- Use the Navbar links to jump to the "Search" and "Signals" sections.

## Usage

To run the app locally, follow these steps:

1. Clone the repository.
2. Open your terminal and navigate to the project folder.
3. Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

4. Start the app with the following command:

   ```bash
   npm start
   ```

5. Open your web browser and go to `http://localhost:3000` to access the app.

Enjoy using the app for searching and managing your favorite profiles!

## License

This project is licensed under the MIT License 

Copyright (c) 2023 Muhammad Mukhtar

## Acknowledgments

- Special thanks to Renan for the opportunity and everyone on his team.