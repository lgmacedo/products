import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
      </style>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
