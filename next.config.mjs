/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // https://lkgesolebdfrrtuuivbm.supabase.co/storage/v1/object/public/public_assets/help.jpeg
        hostname: 'lkgesolebdfrrtuuivbm.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/public_assets/**'
      }
    ]
  }
}

export default nextConfig
