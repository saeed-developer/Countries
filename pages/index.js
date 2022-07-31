import clsx from "clsx";
import Head from "next/head";

export default function Home() {
  return (
    <div className={clsx([styles["container"], "g-container"])}>
      <Head>
        <title>List of Countries</title>
        <link
          href="https://fonts.google.com/specimen/Nunito+Sans"
          rel="stylesheet"
        />
      </Head>
    </div>
  );
}
