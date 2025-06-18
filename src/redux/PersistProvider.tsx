"use client";

import { PersistGate } from "redux-persist/integration/react";
import { ReactNode } from "react";
import { persistStore } from "redux-persist";
import { AppStore } from "@/redux";
import { useStore } from "react-redux";

export default function PersistProvider({ children }: { children: ReactNode }) {
  const store = useStore() as AppStore;
  const persistor = persistStore(store);

  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}

