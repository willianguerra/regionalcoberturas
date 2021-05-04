import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend&display=swap" rel="stylesheet" />

                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script src="https://unpkg.com/react/umd/react.production.min.js" />
                    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" />
                    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" />
                </body>

            </Html>
        );
    };
}