/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            pathname: '/**',
        },{
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/u/**',
        }]
    }
};

export default nextConfig;
