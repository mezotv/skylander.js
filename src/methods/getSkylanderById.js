const config = require("../../resource/skylanders.json");
const { red, bold } = require("../util/TextFormat");

module.exports = async function getSkylanderByID(id) {
    // Not using bold method on strings because it is deprecated.
    if (!id) throw new Error(bold(red("You must provide an id to search for a skylander.")));
    let data;
    if (isNaN(id)) {
        throw new Error(bold(red("Looks like you put a string for the id instead of an integer. If you would like to search for a skylander via name. Consider using the getSkylanderByName method")));
    } else {
        data = config[parseInt(id)];
    }
    if (!data) throw new Error(bold(red(`No skylander found with id ${id}`)));
    return data;
};