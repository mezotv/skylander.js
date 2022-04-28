const config = require("../../resource/skylanders.json");
const { red, bold } = require("../util/TextFormat");
const getSkylanderByID = require("./getSkylanderByID")

module.exports = async function getSkylanderRandom() {
    if (arguments.length > 0) throw new Error(bold(red("You must provide no arguments to get a random skylander.")));

    const id = Math.floor(Math.random() * ((config.length - 1) - 1 + 1) + 1);

    const data = await getSkylanderByID(id);

    return data;
}
