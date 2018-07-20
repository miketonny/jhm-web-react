import Head from 'next/head';

const hello = () => 
  <div>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        Welcome hello world next!
        <img src="/static/images/banner1.png" alt="" />
  </div>

export default hello;