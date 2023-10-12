// AppContext.js
import { createContext, useContext, useState } from "react";
// import PropTypes from "prop-types";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [cid, setCid] = useState(null);
  const [cqr, setCqr] = useState(null);

  return (
    <AppContext.Provider value={{ cid, setCid, cqr, setCqr }}>
      {children}
    </AppContext.Provider>
  );
}

// children.propTypes = {
//   children: PropTypes.node.isRequired,
// };
