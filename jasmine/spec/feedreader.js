/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* Test suite named "RSS Feeds" */
    describe('RSS Feeds:', function() {

         //Test Statement - Are RSS feeds defined?
        it('RSS Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         //Test Statement - Are URLs defined?
         it('Urls are defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
         });

         //Test Statement - Are Names are defined?
         it('Names are defined', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
         });
    });

    /* Test suite named "The menu" */
    describe('The Menu:', function() {

         const menuHid = document.querySelector('body');
         const menuIcon = document.querySelector('.menu-icon-link');

         //Test Statement - Confirm that Menu is Hide initialy.
         it('Menu is hidden', function() {
            //const menuHid = document.querySelector('body');
            expect(menuHid.classList.contains('menu-hidden')).toBe(true);
         });

        //Test Statement - When Clicked Menu Unhides or Hides.
          it('Menu on click hides/unhides', function() {
            //On first click
            menuIcon.click();
            expect(menuHid.classList.contains('menu-hidden')).toBe(false);
            //On second click
            menuIcon.click();
            expect(menuHid.classList.contains('menu-hidden')).not.toBe(false);
        });
    });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries:', function() {

         //Handle Async Request
         beforeEach(function(done) {
            loadFeed(0, done);
         });

         //const entry = document.querySelectorAll('.feed .entry');

         //Test Statement - Confirm loadFeed() completes w/ at least
         //one .entry feed.
         it('LoadFeed completes', function() {
            const entry = document.querySelectorAll('.feed .entry');
            console.log(entry);
            expect(entry.length).toBeGreaterThan(0);
         });
    });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){

         const newFeed = []; // Stores feeds as they are loaded.
         const feedContainer = document.querySelector('.feed');
        //Handle Async Request
         beforeEach(function(done) {
            loadFeed(0, function() {
                //create a array list then loop over the entrys.
                Array.from(feedContainer.children).forEach(function(entry) {
                    newFeed.push(entry.innerText);
                    //console.log(entry.innerText);
                });
            loadFeed(1, done);
            });
         });
         //Test Statement - Confirm next feed content changes.
         it('Content actually changes when new feed is loaded', function() {
            //create a array list then loop over the entrys and use
            // use index to check first feed to the new feed.
            Array.from(feedContainer.children).forEach(function(entry,index) {
                //console.log(newFeed);
                //console.log(entry.innerText,('vs'),newFeed[index]);
                expect(entry.innerText === newFeed[index]).not.toBe(true);
            });
         });
    })
});
