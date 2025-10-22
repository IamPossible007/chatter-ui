# Chatter UI

A TypeScript React frontend for a chat-like application, built with Create React App. It uses Apollo Client for GraphQL, GraphQL Code Generator for typed operations, Material UI (MUI) for the component library, and React Router for navigation. Development is set up to proxy API traffic to a local backend.

- Repository: [chatter-ui](https://github.com/HarshXAI/chatter-ui)
- Language composition: TypeScript-first, with small amounts of HTML/CSS

## Features

- React 18 + TypeScript
- Apollo Client 3 for queries, mutations, and subscriptions
- GraphQL over WebSocket via `graphql-ws` (for real-time updates)
- Typed GraphQL operations via `@graphql-codegen/*` (configured in `codegen.ts`)
- Material UI v5 with Emotion styling
- React Router v6
- Infinite scrolling (`react-infinite-scroller`)
- Local persistence helpers via `localforage`
- CRA dev server proxy to backend on `http://localhost:3001`

## Tech stack

- Runtime: React 18, TypeScript
- UI: MUI v5, Emotion (`@emotion/react`, `@emotion/styled`)
- Data: Apollo Client, `graphql`, `graphql-ws`
- Routing: `react-router-dom` v6
- Utilities: `localforage`, `match-sorter`, `sort-by`
- Tooling: Create React App (`react-scripts`), GraphQL Codegen, Concurrently
- Testing: React Testing Library, Jest DOM

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- Yarn (recommended, scripts reference `yarn`)
- A running GraphQL backend (dev proxy points to `http://localhost:3001`)

### Install

```bash
# Clone
git clone https://github.com/HarshXAI/chatter-ui.git
cd chatter-ui

# Install (Yarn recommended)
yarn
# or (if you prefer npm; note that the start script invokes `yarn codegen`)
npm install
```

### Configure environment (optional)

This app uses `dotenv`. If your setup requires environment variables (e.g., for GraphQL HTTP/WS endpoints), create a `.env` file in the project root. Check `codegen.ts` and the Apollo Client setup in `src/` for the exact variable names expected.

Example (adjust to your environment):
```dotenv
# Example only — confirm actual variable names in the source
# REACT_APP_GRAPHQL_HTTP_URL=http://localhost:3001/graphql
# REACT_APP_GRAPHQL_WS_URL=ws://localhost:3001/graphql
```

### Run in development

```bash
# Runs CRA dev server and GraphQL Codegen in watch mode
yarn start
```

- App: http://localhost:3000
- The dev server proxies API requests to `http://localhost:3001` (see `proxy` in `package.json`).
- Code generation runs in watch mode to keep your generated types/hooks up to date.

### Build

```bash
yarn build
```

Outputs an optimized production build to `build/`.

### Test

```bash
yarn test
```

Runs tests in watch mode.

### Eject (optional, irreversible)

```bash
yarn eject
```

Exposes CRA configuration for advanced customization.

## Scripts

Defined in [`package.json`](./package.json):

- `start`: concurrently runs `react-scripts start` and `yarn codegen --watch`
- `build`: production build
- `test`: run tests
- `eject`: eject CRA
- `codegen`: run GraphQL code generation using `codegen.ts`

GraphQL Code Generator is configured via [`codegen.ts`](./codegen.ts). Generated outputs (types/hooks) and schema/doc locations are specified there.

## Project structure

Top-level layout:

```
.
├─ .vscode/                # Editor settings (optional)
├─ public/                 # Static assets served by CRA
├─ src/                    # Application source code
├─ codegen.ts              # GraphQL Code Generator config
├─ package.json            # Dependencies and scripts
├─ tsconfig.json           # TypeScript configuration
├─ yarn.lock / package-lock.json
└─ README.md
```

Explore `src/` for routes, components, Apollo setup, and generated GraphQL artifacts.

## Development notes

- WebSocket subscriptions use `graphql-ws`. Ensure your backend supports the `graphql-ws` protocol on the configured WS endpoint.
- The CRA `proxy` is set to `http://localhost:3001`. If your backend runs elsewhere, update `proxy` in `package.json` or use environment-specific configuration as needed.
- If you prefer npm, modify the `start` script to avoid invoking `yarn codegen` explicitly.

## Troubleshooting

- Codegen not updating types: ensure `yarn start` is running (it launches `yarn codegen --watch`) or run `yarn codegen` manually.
- CORS errors: confirm your backend enables CORS (the project includes `cors` as a dependency, typically used on the server).
- WebSocket connection issues: verify WS URL, protocol (`graphql-ws`), and that your backend supports subscriptions.

## Contributing

- Fork the repo and create a feature branch.
- Ensure type checks and tests pass.
- Open a pull request with a clear description.

## License

No license specified in the repository.
