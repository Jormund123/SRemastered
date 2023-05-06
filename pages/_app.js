import Head from "next/head";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Sunauloghar</title>
            <link rel='icon' href='/favicon.ico' />
            <link rel='preconnect' href='https://stijndv.com' />
            <link rel='stylesheet' href='https://stijndv.com/fonts/Eudoxus-Sans.css' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
    </>
);

export default MyApp;
