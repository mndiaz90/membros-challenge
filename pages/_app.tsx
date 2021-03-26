import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

    return (
        <div>
            <title>Tesseract</title>
            <Component {...pageProps} />
        </div>
    )

}

export default MyApp