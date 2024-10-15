/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.slack.com",
        pathname: "/files-pri/**",
      },
      {
        protocol: "https",
        hostname: "eobkvusotnvurtdlxvgr.supabase.co",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "s3-eolluga-public.s3.ap-northeast-2.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
