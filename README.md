# Wind Farm Website

WindFarm Research site for **INSITE Lab**, built with **React 18**, **MUI (Material UI) 5** using styling patterns using Creative Tim's [Material Kit 2 React](https://www.creative-tim.com/product/material-kit-react) template

## Prerequisites

- **Node.js** (LTS recommended, e.g. 18.x or 20.x) — includes `npm`
- No global packages required; everything installs locally from `package.json`

## Install and run

From the **repository root** (`Wind_Farm_Website/`):

```bash
npm install
npm start
```

- **Development:** `npm start` runs [Create React App](https://create-react-app.dev/)’s dev server (default: [http://localhost:3000](http://localhost:3000)).
- **Production build:** `npm run build` outputs an optimized bundle in `build/`.
- **Lint:** `npm run lint`
- **Tests:** `npm test` (CRA / Jest)

### How routing works

- `**src/index.js`** — mounts the app with `BrowserRouter`.
- `**src/App.js**` — applies the MUI theme, registers routes from `**src/routes.js**`, and sets `**/**` to the Wind Home page. Unknown paths redirect to `**/**`.
- `**src/routes.js**` — defines the **Pages** menu used by the navbar (Wind Justice Home, Explore, Team). Those paths are lazy-loaded where noted below.


| URL                              | Page                                                             |
| -------------------------------- | ---------------------------------------------------------------- |
| `/`                              | Wind Home (main landing)                                         |
| `/pages/landing-pages/wind-home` | Same Wind Home content (hash links like `#about` also work here) |
| `/pages/landing-pages/explore`   | Explore                                                          |
| `/pages/landing-pages/team`      | Team                                                             |


Shared nav labels live in `**src/pages/LandingPages/overlayNavLinks.js`** and `**src/pages/LandingPages/WindHome/nav.routes.js**`.

Imports use `**jsconfig.json**` `baseUrl: "src"` (e.g. `import X from "components/MKBox"`).

## Dependencies

Runtime dependencies are declared in `**package.json**`. Main ones:


| Package                                                                | Role                                  |
| ---------------------------------------------------------------------- | ------------------------------------- |
| `react`, `react-dom`                                                   | UI                                    |
| `react-router-dom`                                                     | Routing                               |
| `@mui/material`, `@mui/icons-material`                                 | Components and icons                  |
| `@emotion/react`, `@emotion/styled`, `@emotion/cache`                  | Styling engine used by MUI            |
| `prop-types`                                                           | Prop validation                       |
| `chroma-js`                                                            | Color utilities (theme / kit)         |
| `flatpickr`, `react-flatpickr`                                         | Date picker (`MKDatePicker`)          |
| `react-copy-to-clipboard`, `react-countup`, `react-syntax-highlighter` | Used by Material Kit–style components |


**Dev:** `react-scripts` (build tooling), ESLint, Prettier, testing libraries (`@testing-library/`*).

Install all with:

```bash
npm install
```

## File structure

High-level layout of this repo (trimmed; `assets` and `theme` contain many small files):

```
Wind_Farm_Website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js                 # Theme, routes, "/" → Wind Home
│   ├── index.js               # React entry
│   ├── routes.js              # Navbar routes (lazy pages)
│   ├── assets/
│   │   ├── images/            # Photos, SVGs, logos, illustrations (keep for future pages)
│   │   └── theme/             # MUI theme overrides (base, components, functions)
│   ├── components/            # Reusable UI (MK* kit components, InsiteLogoMark, …)
│   └── pages/
│       └── LandingPages/
│           ├── overlayNavLinks.js   # Shared nav items (Explore, Team, …)
│           ├── Explore/              # Explore page + ExploreNavbar + hero assets
│           ├── Team/                 # Team page, data, hero background
│           └── WindHome/             # Home sections (Hero, Footer, …) + nav.routes.js
├── jsconfig.json              # Path aliases (baseUrl: src)
├── package.json
└── README.md
```

## Browser support

Same baseline as Create React App: recent versions of Chrome, Firefox, Safari, and Edge.

## Credits / license

- UI patterns and components derive from **Material Kit 2 React** by **Creative Tim** — see their [license](https://www.creative-tim.com/license) and product page for terms.
- **MUI:** [https://mui.com/](https://mui.com/)

