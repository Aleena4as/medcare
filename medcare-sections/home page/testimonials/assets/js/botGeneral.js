/**
 * @Author @Aleena
 * Ultimate Dynamic Script tag for Embedding to other websites
 */

window.addEventListener("DOMContentLoaded", () => {
   document.body.insertAdjacentHTML(
      "beforeend",
      `<iframe src="http://localhost:3003/" id="bluelogic-bot"
           style="border: 0; width: 80px; height: 80px; position: fixed; right: 10px; bottom: 0;z-index: 99999999999999;display: block;"></iframe>`
   );

   if (window.innerWidth < 1200) {
      const botContainer = document.getElementById("bluelogic-bot");
      botContainer.style.right = "0";
   }
   if (window.innerWidth < 767) {
      const botContainer = document.getElementById("bluelogic-bot");
      botContainer.style.bottom = "0";
      botContainer.style.right = "0";
   }

   window.addEventListener("message", function (message) {
      console.log("message is", message.data);
      const botContainer = document.getElementById("bluelogic-bot");

      if (message.data === false && window.innerWidth > 767) {
         botContainer.style.width = "250px";
         botContainer.style.height = "500px";
      } else if (message.data === false) {
         botContainer.style.width = "100vw";
         botContainer.style.height = "500px";
      }

      if (message.data === true && window.innerWidth <= 767) {
         botContainer.style.width = "80px";
         botContainer.style.height = "80px";
         return;
      }
   });
});
