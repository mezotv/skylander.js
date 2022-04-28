/* Fetching a random skylander from the API and printing it to the console. */

const { getSkylanderByName, getSkylanderById, getSkylanderRandom } = require("../src/Main"); 



const run = async () => {
    let skylander = await getSkylanderRandom()
    console.log(skylander);

}
run();