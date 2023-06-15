import Auth from "@/components/WithAuth/WithAuth";
import { GlobalStyles } from "@/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import { Roboto } from "@next/font/google";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledComponentsRegistry>
          <main className={roboto.className}>
            <GlobalStyles />
            <Auth>
              <Component {...pageProps} />
            </Auth>
          </main>
        </StyledComponentsRegistry>
      </PersistGate>
    </Provider>
  );
}
