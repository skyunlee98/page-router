import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {protocol:'https', hostname:'picsum.photos', pathname:'/**'},
      {protocol:'https', hostname:'fastly.picsum.photos', pathname:'/**'}
    ]
  }
};

export default nextConfig;
