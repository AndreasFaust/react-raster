import React from "react";
import { AnimatePresence } from "framer-motion";
import "./css/reset.css";
import "./css/index.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
