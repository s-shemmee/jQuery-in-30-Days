# One Month jQuery

### Prerequisites: HTML & CSS Selectors

### Goal: Build multiple interactive webpages using jQuery

#### Objectives:

* Read and understand documentation for external libraries
* Understanding the DOM
* Fundamentals of jQuery, including DOM traversal and manipulation
* Debug projects using the console and debugger
* Resources for troubleshooting jQuery beyond this course
* Basic understanding of AJAX
* Complete a jQuery project by yourself from scratch to completion

### Project 1: LightBox

Simple photo gallery app, using the Lightbox library.

* Learn how to read the Lightbox documentation
* Learn how to include the Lightbox assets into our folder structure
* Learn how to make the images work with the `data-lightbox` attribute
* Make the photos into a gallery by giving them the same `data-lightbox` id
* Add an option: `positionFromTop()`

#### Challenge:
* Choose 6 photos from Google (or your personal library) and replace the current images in your project
* Replace the header text to something relevant to your new photos
* Add one more option that Lightbox provides

### Project 2: FAQ Page

Basic FAQ Page, using an animated accordion drop down. When a question is clicked, the corresponding answer is revealed.

* Introduce the DOM
* $ - jQuery selector function
* CSS Selectors
* console.log()
* Explore effects: `slideDown()`,`slideToggle()` and `fadeToggle()`
* $this

#### Challenge:
* Create a custom animation using `animate()`
* Add a 4th question to the FAQ
* Replace the text of one of the answers with an image or gif


### Project 3: Todo List

Simple todo list app, using local storage to persist data.

 * $(document).ready()
 * event.preventDefault()
 * Conditionals
 * Adding/removing DOM elements
 * Modifying HTML attributes
 * Persisting data in local storage

#### Challenge:
 * Add an animation to the item removal
 * Add an easter egg, i.e. if the `listItem === "dance"` have a dance gif take over the screen

### Project 4: Launch Pads

Apartment marketplace app with city filtering, and rendering JSON data using AJAX.

* Objects & Arrays
* Requesting data with AJAX
* Using the debugger
* jQuery Utility Methods ($.each, $.grep)
* Bootstrap Framework
* JSON

#### Challenge:
* Add [Bootstrap JS](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js) to your application
* Following the Bootstrap documentation, use a Bootstrap modal or alert to notify the user when a listing has been clicked that a new tab has been opened in Google Maps
