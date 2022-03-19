/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URI:
      'mongodb+srv://Booknow:uTwnNoqfpvDzJ975@cluster0.0pbj8.mongodb.net/booknow?retryWrites=true&w=majority',
    DB_LOCAL_URI: 'mongodb://127.0.0.1:27017/booknow',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
