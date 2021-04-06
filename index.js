const which = require("which");

(async () => {
  try {
    console.log(await which("docker"));
  } catch (error) {
    console.log(error);
  }
})();
