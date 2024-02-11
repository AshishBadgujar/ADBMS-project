
export default {
    blogName: 'TechBlog',
    defaultTitle: 'techblog',
    description: 'Designed for technical blogs, made with Next.js and mongoDB.',
    admin_pass: process.env.ADMIN_PASSWORD,
    defaultLanguage: 'en',
    locale: 'en_US',
    social: {
        playstore: 'https://playstore.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://www.linkedin.com',
        youtube: 'https://youtube.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com'
    },
    footer: {
        links: [
            {
                title: 'Contact us',
                items: [
                    { label: 'me@techBlog.in', url: '#' }
                ]
            },
            {
                title: 'About',
                items: [
                    { label: 'Privacy Policy', url: '#' },
                    { label: 'Terms of Service', url: '#' }
                ]
            }
        ]
    }
}