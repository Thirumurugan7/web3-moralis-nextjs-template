import Head from "next/head";
import styles from "../styles/Home.module.css";
//import Header from "../components/Header";
import EasyHeader from "../components/EasyHeader";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="SmartContract Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EasyHeader />
    </div>
  );
}
