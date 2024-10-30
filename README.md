This is a project highlighting my ability to code out a Landing Page using HTML, CSS, JavaScript, and API calls.

The code structure is very basic, just using normal <section> layouts. I have code in there to properly add space between each section to keep the space between all of the sections consistent with one another.

I used an API that go Historical Newspaper data from the Library of Congree Archives (linked on the site). I used jQuery and Ajax to make get the artciles' JSON file. AJAX is great for accessibility because the page can load before the AJAX is called. If the server is being slow for whatever reason, the page can still load, and the user doesn't have to wait on an external server to view the rest of the site.

In other terms of accessibility, I made sure to keep the colors simple. I wanted everything to contrast well to make it easy for the user to read what was on the page. New America's green does not pass contrast ratio's against a light background, so I made sure it was only used to underline links (much like New America's current site). Lastly, I added aria-label tags to the buttons on the site, and an alt tag to the only image on the site. This will ensure a screen reader properly idenitifies these.
