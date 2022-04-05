import React from "react";

const PageError = React.lazy(() => import("./pages/Pages/Special/PageError"));
const PageThankYou = React.lazy(() => import("./pages/Pages/Special/PageThankYou"));
const Main = React.lazy(() => import("./pages/Main/index"));

const RemoteExpert = React.lazy(() => import("./pages/Features/RemoteExpert/index"));
const ClientService = React.lazy(() => import("./pages/Features/ClientService/index"));
const LocationTracking = React.lazy(() => import("./pages/Features/LocationTracking/index"));
const OnlineTimesheet = React.lazy(() => import("./pages/Features/OnlineTimesheet/index"));
const TagsTracking = React.lazy(() => import("./pages/Features/TagsTracking/index"));
const TimeTracking = React.lazy(() => import("./pages/Features/TimeTracking/index"));

const Constructing = React.lazy(() => import("./pages/Industries/Constructing/index"));
const Courier = React.lazy(() => import("./pages/Industries/Courier/index"));
const Landscaping = React.lazy(() => import("./pages/Industries/Landscaping/index"));
const Manufactoring = React.lazy(() => import("./pages/Industries/Manufactoring/index"));
const Cleaning = React.lazy(() => import("./pages/Industries/Cleaning/index"));
const OilGas = React.lazy(() => import("./pages/Industries/OilGas/index"));
const Other = React.lazy(() => import("./pages/Industries/Other/index"));
const Industries = React.lazy(() => import("./pages/Industries/Common/index"));

const Glasses = React.lazy(() => import("./pages/SmartGlasses/index"));

const Pricing = React.lazy(() => import("./pages/Pricing/index"));

const routes = [
  { path: "/page-error", component: PageError, isWithoutLayout: true },
  { path: "/page-thankyou", component: PageThankYou, isWithoutLayout: true },

  { path: "/", component: Main },

  { path: "/features/remote-expert", component: RemoteExpert },
  { path: "/features/client-service-control", component: ClientService },
  { path: "/features/location-tracking", component: LocationTracking },
  { path: "/features/online-timesheet", component: OnlineTimesheet },
  { path: "/features/tags-tracking", component: TagsTracking },
  { path: "/features/time-tracking", component: TimeTracking },

  { path: "/industries/constructing", component: Constructing },
  { path: "/industries/courier", component: Courier },
  { path: "/industries/landscaping", component: Landscaping },
  { path: "/industries/manufacturing", component: Manufactoring },
  { path: "/industries/cleaning", component: Cleaning },
  { path: "/industries/oil-gas", component: OilGas },
  { path: "/industries/other-industries", component: Other },
  { path: "/industries/inpres-industries", component: Industries },

  { path: "/inpres-glasses", component: Glasses },

  { path: "/pricing", component: Pricing }
];

export default routes;
