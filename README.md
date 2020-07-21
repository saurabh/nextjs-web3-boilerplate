# Next.js Web3.js Boilerplate

This boilerplate uses [React hooks and Context API to create global state](https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c). 

To get started:
  - yarn install
  - npm run dev

Add a next.config.js file in the root dir to use .env variables within your project.

`
module.exports = {
  env: {
    INFURA_ID: 'X',
  },
}
`

## Project Structure is as follows:

/components  => Reusable components

/pages  => [More info about Next.js Pages](https://nextjs.org/docs/basic-features/pages)
 
/state  => Contains initialState and reducer

/utils  => Contains the getWeb3 and AddressShortener
