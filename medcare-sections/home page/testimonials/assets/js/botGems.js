/**
 * @Author @Aleena
 * Ultimate Dynamic Script tag for Embedding to other websites
 */

 window.addEventListener("DOMContentLoaded", () => {
   document.body.insertAdjacentHTML(
      "beforeend",
      `<iframe src="https://gemsbot.bluelogic.ai/" id="bluelogic-bot"
          style="border: 0; width: 120px; height: 120px; position: fixed; right: 30px; bottom: 0;z-index: 99999999999999;display: block;"></iframe>`
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
      // console.log("message is", message);
      const botContainer = document.getElementById("bluelogic-bot");

      // on closing bot
      if (
         message.data.value === true &&
         message.data.icon === "lets-cross" &&
         window.innerWidth <= 767
      ) {
         botContainer.style.width = "120px";
         botContainer.style.height = "120px";
      } else if (
         message.data.value === true &&
         message.data.icon === "lets-cross" &&
         window.innerWidth > 767
      ) {
         botContainer.style.height = "120px";
         botContainer.style.width = "120px";
      }

      //    on letstalk icon
      if (message.data.value === true && message.data.icon === "talk" && window.innerHeight <= 767) {
         botContainer.style.height = "100vh";
      } else if (
         message.data.value === true &&
         message.data.icon === "talk" &&
         window.innerWidth > 767
      ) {
         botContainer.style.height = "100vh";
         // botContainer.style.width = "100vw";
      }

      if (message.data.value === false && message.data.icon === "talk" && window.innerWidth <= 767) {
         botContainer.style.height = "100vh";
         botContainer.style.width = "100vw";
      } else if (
         message.data.value === false &&
         message.data.icon === "talk" &&
         window.innerWidth > 767
      ) {
         botContainer.style.width = "100vw";
         botContainer.style.height = "700px";
      }

      if (message.data.value === true && message.data.icon === "cross") {
         botContainer.style.width = "120px";
         botContainer.style.height = "120px";
         return;
      }
      if (
         message.data.value === false &&
         message.data.icon === "lets-cross" &&
         window.innerWidth <= 767
      ) {
         botContainer.style.width = "100vw";
         botContainer.style.height = "280px";
         botContainer.style.bottom = "0";
      } else if (
         message.data.value === false &&
         message.data.icon === "lets-cross" &&
         window.innerWidth > 768
      ) {
         botContainer.style.width = "428px";
         botContainer.style.height = "280px";
         botContainer.style.bottom = "0px";
      }
   });
});

