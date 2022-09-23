import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* The Navbar is being called at _app.js */}

      {/* setting a high margin just to exemplify navbar colors changing when scrolling */}
      <div className="mb-[100rem]"></div>
      <h1 className="mb-[50rem]">text example</h1>
    </div>
  );
}