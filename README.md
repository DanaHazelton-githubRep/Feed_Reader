# Feed Reader Project

## Table of Contents

- [App Info](#appinfo)
- [Run Instructions](#instructions)
- [Test Descripts](#test)
- [Contributing](#contributing)

## **App info**
- Code testing App built using Jasmine, to ensure
code functions are preforming as expected. This allows
developer the ability modify code and be assured that changes didn't not affect other parts of the programs functionality.
- Software -  javascript, html, css and [Jasmine]
- Download and extract zip file or clone the repository to a Directory(folder) on local machine.

## **Run Instructions**
- Open the index.html file using the browser of choice.
- At Bottom of HTML page you will find Jasmine, this will have
test results (# of SPEC run and # failures).
- Turn understand Jasmine further - Supporting Documentation for Jasmine can be found
@ https://jasmine.github.io/

## **Test Descripts**
-*RSS Feeds*
    - *RSS Feeds are defined* - Test allfeeds variables defined and not empty.
    - *Urls are defined* - Test that loops through each feed
    in the allFeeds object and ensures it has a URL defined
    and that the URL is not empty.
    - *Names are define* - test that loops through each feed
    in the allFeeds object and ensures it has a name defined
    and that the name is not empty.
- The Menu
    - *Menu is hidden* - Test that ensures the menu element is
    hidden by default.
    - *Menu on click hides/unhides* - Test that ensures the menu changes visibility when the menu icon is clicked. 
- Initial Entries
    - *LoadFeed completes* - Test that ensures when the loadFeed
    function is called and completes its work, there is at least
    a single .entry element within the .feed container.
- New Feed Selection
    - *Content actually changes*  - Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## **Resources**
- Udacity FEWD - Javascript Tools and Testing
- MDN web docs - https://developer.mozilla.org/en-US/docs/Learn/JavaScript
- Udacity knowledge blogs
- Jasmine - https://jasmine.github.io/
- The Stack-overflow community