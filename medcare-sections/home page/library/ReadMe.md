**Architecture, Design Patterns & Best Practices** -HTML SCSS-

-  **DRY - Do Not Repeat Yourself**
   If you are using a function more than once, then write that function inside a JS file.
   So that you can re-use it where ever necessary

-  Always _COMMENT_ your code where ever necessary
   This will reduce the stress of debugging in the future

*  _DO NOT USE_
   Float - CSS Property
   tablet layout for designing - Instead use Flex, Grid, Columns

*  Add all the images inside /assets/images for images

*  All the colors, fonts etc anything that is repeated should be created as a variable in variable.scss
   If a section is being used in many pages then create a generic-class in global.scss or as a mixin in mixin.scss

*  _API Calls_
   Use Axios for api call.

-  When writing a style in a scss file

   -  Parent className should be same as the page name
   -  Example if the page is home.html
   -  class name should be className="home-container"
   -  Only write the styles for that specific file in it, NO DONT Conflict the style for other pages.
      Every code of the file should be nested inside the same container, do not write any code out side this container, that will lead to conflict in different pages if we use the same class name.
      Example:
      ** Do This **
      home-container {
      .title {
      color:grey;
      }
      }
      ** Don't Do This **
      home-container {
      //Code
      }
      .title {
      color:grey;
      }


*  Once the task is done , Please inform the concerned person.

-  Please add readable commits to git commit, example UPDATE: or RESPONSIVE or MERGE: , BUGGIXES: before commiting to the git
   and write down everything you have done in that commit for example
   git commit -m "UPDATE/Responsiveess: #Added footer design 
   -#Created header with responsivness"

-  Write comment for the opening div of a  section and closing div of a section in HTML
-  Do not leave commented codes for more then a week, if you think you are not going to use it then please remove it
-  Do not leave unnecessary warning on unused variables, please fix all the warning possible and remove all unused function or variables , state etc.

*  Framework     : Bootstrap 4
*  Library       : JQuery
*  For Animation : GSAP

* Device Sizes 
   - Desktop large  :  1920
   - Desktop        :  1440
   - laptop         :  1200
   - Tablet Large   :  992
   - Tablet         :  768
   - Mobile         :  576


* Browser Support 
Chrome
FireFox
Safari

* Page Speed
Desktop 70
Mobile  40

https://developers.google.com/speed/pagespeed/insights/