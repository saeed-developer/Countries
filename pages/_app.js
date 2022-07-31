import clsx from "clsx";
import { ThemeContext } from "context/theme";
import Layout from "layouts/default";
import { useState } from "react";
import "styles/global/_app.scss";
import styles from "./body.module.scss";
import "./body.css";
function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <div
        className={clsx([
          isDark ? styles["container--dark"] : styles["container--light"],
        ])}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
}

export default MyApp;
