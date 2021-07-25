import Head from "next/head";
import Header from "./header";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>billyjacoby.com{props.title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main style={{ paddingTop: "70px" }}>{props.children}</main>
    </>
  );
}
