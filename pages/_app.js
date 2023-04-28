import React from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

// Blog config
import blogConfig from '../blogConfig';

// Import style sheets
import '../stylesheets/global.css';
import '../stylesheets/nprogress.css';
import '../stylesheets/nightOwl.css';
import 'react-quill/dist/quill.snow.css';


// Initialize the Caasy SDK. Update the Caasy
// site ID in "blogConfig.js" in the root folder.
// caasy.init(blogConfig.caasySDKConfig);

// Loading indicator
Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeComplete', NProgress.done);
Router.events.on('routeChangeError', NProgress.done);


const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title key='title'>{blogConfig.blogName || ''}</title>
            <meta key='description' name='description' content={blogConfig.description} />
        </Head>
        <Component {...pageProps} />
    </>
);

export default App;