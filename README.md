# [Votos.pt](https://votos.pt/)

Portuguese politics made easy.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node

### Installing

1. Clone

```
git clone https://github.com/antoniojps/votos-client.git
```

2. Install dependencies

```
cd votos-client
yarn install
```

3. Start developing

```
yarn start
```

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## Developing new components

### Atomic design

The components structure follows Atomic Design:

- **Atoms**: elements, buttons, inputs
- **Molecules**: components, the combination of atoms
- **Organisms**: sections of a page, the combination of molecules

### Develop in isolation

[Storybook](https://storybook.js.org/) is used to build components in isolation and document behaviors for potential reuse through storybook stories.

A molecule or organism that possibly recieves data through an asynchronous request should always consider the three stories:

- **Loading**
- **Error**
- **Default**

Other stories are created to demonstrate modifiers (props that modify the component).

Run storybook:

```
yarn storybook
```

Here's an example components folders struture:

```
components
└───atoms
│   └───Button
│       │   Button.js
│       │   Button.stories.js
└───molecules
│   └───Card
│       │   Card.js
│       │   Card.stories.js
└───organisms
│   └───Nav
│       │   Nav.js
│       │   Nav.stories.js
```

## Deployment

To understand how to deploy the website read the Gatsby documentation: [Deploying and Hosting](https://www.gatsbyjs.org/docs/deploying-and-hosting/).

```
yarn build
```

Start the production server

```
yarn serve
```

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Gatsby](https://www.gatsbyjs.org/) - React-based, GraphQL powered, static site generator.
- [styled-components](https://www.styled-components.com/) - CSS in JS for React.
- [Storybook](https://storybook.js.org/) - Tool for developing UI components in isolation for React, Vue, and Angular.

## Authors

- **António Santos** - [antoniosantos.me](https://antoniosantos.me)
- **Henrique Silva** - [github](https://github.com/HenriqueSilva2)
- **Vasco Silva** - [github](https://github.com/vascosilvaa)
