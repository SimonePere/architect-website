/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {unoptimized:true}// Abilita l'esportazione statica
};

module.exports = nextConfig;
