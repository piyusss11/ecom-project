import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Header from "./Header";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Header>
      <div className={GeistSans.className}>
        <Component {...pageProps} />
      </div>
    </Header>
  );
};

export default api.withTRPC(MyApp);
