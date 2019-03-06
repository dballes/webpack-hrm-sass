console.log(`I've been required by Webpack`);
import style from "./_scss/main.scss";

if (module.hot) {
    module.hot.accept();
}

var counter = 0;

document.addEventListener("DOMContentLoaded", function(e) {
   document.getElementById("action").addEventListener("click", function() {
      console.log("Webpack rocks!!! " + counter);
      counter++;
   });
});
