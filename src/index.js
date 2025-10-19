import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/Store";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        {/*process.env.NODE_ENV === 'development' && <ReactQueryDevtools />*/}
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);

console.log(`Abriendo react`);
