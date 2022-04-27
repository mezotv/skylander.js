/* Fetching a random skylander from the API and printing it to the console. */

const { getSkylandernByName } = require("../src/Main"); 



const run = async () => {
    let skylander = await getSkylandernByName("spyro")
    console.log(skylander);

}
run();