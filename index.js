const core = require("@actions/core");
const cowsay = require("cowsay");

const text = core.getInput("text");

core.info(
  cowsay.say({
    text,
  })
);
