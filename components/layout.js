import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>billyjacoby.com{props.title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Quicksand:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {props.children}
    </>
  );
}
