import type { NextConfig } from "next";

// TypeScript is checked separately with `npm run typecheck` because the
// installed Next build runner cannot parse `tsc --showConfig` in this environment.
const nextConfig: NextConfig = { output: "export", trailingSlash: true, typescript: { ignoreBuildErrors: true } };
export default nextConfig;
