const config = require("../../resource/skylanders.json");
const { red, bold } = require("../util/TextFormat");

module.exports = async function getskylanderByName(name) {
    if (!name) throw new Error(bold(red("You must provide a name to search for a skylander.")));

    let skylander;
    if (!(isNaN(name))) {
        throw new Error(bold(red("Looks like you put a name for the id instead of an id. If you would like to search for a skylander via id. Consider using the getskylanderByID method")));
    } else {
        skylander = config.find(p => new String(p.name).toLowerCase() === name.toLowerCase());
    }
    if (!skylander) throw new Error(bold(red(`No skylander found with name ${name}`)));
    else
        return skylander;
};