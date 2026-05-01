/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { lazy, Suspense } from "react";

// @mui material components
import Icon from "@mui/material/Icon";

// Lazy-loaded to avoid a circular import: WindHome imports this file for the navbar.
const WindHomePage = lazy(() => import("pages/LandingPages/WindHome"));
const ExplorePage = lazy(() => import("pages/LandingPages/Explore"));
const TeamPage = lazy(() => import("pages/LandingPages/Team"));

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "Wind Justice Home",
            route: "/pages/landing-pages/wind-home",
            component: (
              <Suspense fallback={null}>
                <WindHomePage />
              </Suspense>
            ),
          },
          {
            name: "Explore",
            route: "/pages/landing-pages/explore",
            component: (
              <Suspense fallback={null}>
                <ExplorePage />
              </Suspense>
            ),
          },
          {
            name: "Team",
            route: "/pages/landing-pages/team",
            component: (
              <Suspense fallback={null}>
                <TeamPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
];

export default routes;
