# Kava Data Display Challenge

## Background 
KAVA tokens can be 'staked', which means that they are bonded to a particular validator that participates in consensus. When that validator receives KAVA tokens as rewards for validating transactions, those rewards are passed on to the staker. In JSON, each delegation looks like this: 

`{ 
"delegator_address": <kava address: string>, 
"validator_address": <validator address: string>, 
"shares": <number shares: decimal>, 
}`

The complete state of the kava blockchain, as JSON, can be found at: 
[Link](https://ipfs.io/ipfs/QmbZiEejjAmdEmtF71WLPuY3dwkeMPCmcVxaj7N8aH56Zw/kava-4-export-202101 22.json)

## Goals

1. Calculate the median number of shares per delegation 
2. Calculate the mean number of shares per delegation 
3. Calculate the kava address(es) that has the most number of delegations 
4. Produce a graph that shows the distribution of shares per delegation 


## Set Up Instructions
- Fork and clone this repository.
- Once inside the directory, install dependencies with `npm install`.
- Run the development server with `npm start`.
- The application will run on `localhost` in the browser.

## Technologies Used
- React
- Javascript
- HTML5
- CSS3
- Bootstrap
- React-Chart.js 2

## Future Improvements
- Refactor methods into service file
- Improve UI during loading time while waiting for API response
- Further styling
