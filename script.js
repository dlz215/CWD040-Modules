// Inline Script: JS was written in one contiguous chunk in HTML file within <script> tag
// Lacks scalability and re-usability
// "Pollution" of global namespace. Lots of variables defined in global scope/window object

// Script Tags: script tags point to separate JS files
// need to copy script tag to all pages that need to access it
// no dependency resolution
// still pollutes global namespace

// IIFE: Immediately Invoked Function Expression
// anonymous fn wrapped in grouping operator ()
// fn runs as soon as it's defined
// initiation code (and variables) inside of fn are discarded after running
// still no dependency resolution, need to manage loading order of scripts
const myApp = {}

(function() {
    myApp.add = function(a, b) {
        return a + b;
    }
})
();

// CommonJS: module formatting system
// Broswerify: module bundler


