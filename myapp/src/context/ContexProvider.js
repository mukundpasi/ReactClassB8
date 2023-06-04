import React from "react";
import DataContext from "./DataContext";

export default function ContexProvider({ children }) {
  return <DataContext.Provider>{children}</DataContext.Provider>;
}
