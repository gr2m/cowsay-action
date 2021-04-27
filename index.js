const core = require("@actions/core");
const cowsay = require("cowsay2");

const text = core.getInput("text");

core.info(cowsay.say(text));
