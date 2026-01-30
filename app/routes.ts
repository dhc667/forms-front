import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("debug", "routes/debug.tsx"),
  route("debug/components-test", "routes/debug/components-test.tsx"),
] satisfies RouteConfig;
