# Drawer

A React SPA

## Run it locally

    $ git clone https://github.com/wzamites/drawer/
    $ cd drawer
    $ npm install
    $ npm start

## Design

I was able to follow the pixel specifications exactly, and you can verify this in developer tools. I also incorporated some but not all hover and resting styles. Keyboard tabs also focus on the elements but don't expand the drawer.

## React-Router-DOM

I used the React-Router library for routing. Client-side routing is required in an SPA with different URLS, and this is contained in src/Contents.js


## Things I would improve with more time

I wasn't able to implement the accordion functionality of the Create... button in the nav in time. This would require SCSS or event handling in React. Until now, all of the animation and UI functionality have been CSS. The next step would be to create a React Event with customized animation and hidden elements. Or use a highly customizable library like MaterialUI or Bootstrap that has an accordion.
