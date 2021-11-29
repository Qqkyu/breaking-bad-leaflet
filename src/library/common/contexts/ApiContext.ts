import { BreakingBadApi } from "main/api";
import { createContext } from "react";

const ApiContext = createContext(new BreakingBadApi());

export default ApiContext;
