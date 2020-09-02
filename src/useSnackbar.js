import { useContext } from "react";

import SnackbarContext from "./context";

const useSnackbar = () => useContext(SnackbarContext);

export default useSnackbar;
