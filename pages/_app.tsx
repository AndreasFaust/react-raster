import React from "react";

import "./css/reset.css";
import "./css/index.css";

interface Props {
  Component?: any;
  pageProps?: any;
  router?: any;
}

const App: React.FC<Props> = ({ Component, pageProps, router }) => {
  return (
    <>
      <div className="content">
        <Component {...pageProps} key={router.asPath} />
      </div>
    </>
  );
};

export default App;
