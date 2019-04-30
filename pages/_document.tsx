import NextDocument, {
  Html,
  Head,
  Main,
  NextDocumentContext,
  NextScript,
} from 'next/document';

class Document extends NextDocument {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="/static/favicon.png"
            rel="shortcut icon"
            type="image/png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
