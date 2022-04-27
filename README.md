
# skylander.js 


skylander.js is a standalone tool made to help developers get info about a skylander and use it in any project with ease. Yes this is very similar to pokedev.js since we made both packages!

![Logo](https://imgs.search.brave.com/_vUWxtojL6086ANvnlRNqHKJ1MkmNblTuVFlO73-JBI/rs:fit:764:341:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/bG9nb3BlZGlhL2lt/YWdlcy8wLzAwL1Nr/eWxhbmRlcnNfTG9n/by5wbmcvcmV2aXNp/b24vbGF0ZXN0P2Ni/PTIwMTMxMDEyMTE1/MjAz)

[![Discord](https://img.shields.io/discord/953072048576536596?color=5865F2&label=discord&logo=Discord&logoColor=red)](https://discord.gg/WNHGZhHEmD) 


[![npm](https://img.shields.io/badge/npm-skylander.js-red)](https://www.npmjs.com/package/skylander.js) 

[![size](https://img.shields.io/github/repo-size/mezotv/skylander.js?color=red&label=SIZE)](https://www.npmjs.com/package/skylander.js)

[![downloads](https://img.shields.io/npm/dt/skylander.js?color=red)](https://www.npmjs.com/package/skylander.js)

## Quick Links

  - [Quick Links](#quick-links)
  - [Installation](#installation)
  - [Code Example](#code-example)
    - [Console output](#console-output)
  - [Methods](#methods)
  - [Developers](#developers)

## Installation

Install skylander.js with npm

```bash
  npm install skylander.js
```
Install skylander.js with yarn
```bash
  yarn add skylander.js
```
    
## Code Example

```js
const { getSkylanderByName } = require("skylander.js") 


const run = async () => {
    const skylander = await getSkylanderByName("032")
    console.log(skylander);
}

run();
```
## Console output

```js
{
  name: 'Spyro',
  image: 'https://cdn.discordapp.com/attachments/846807473352343552/846815877839585320/Spyro.jpg',
  gender: 'Male',
  species: 'Purple Dragon',
  release: "Skylanders: Spyro's Adventure",
  role: 'Skylander',
  element: 'https://cdn.discordapp.com/attachments/846807473352343552/846815741483286628/Magic.png',
  quote: 'All Fired Up!'
}
```
## Methods

- **`getSkylanderByName(name)`**:
Fetching a Skylander by his name.

## Contributors

![image](https://contrib.rocks/image?repo=mezotv/skylander.js)
