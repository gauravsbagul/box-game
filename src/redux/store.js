import rootReducer from "./reducers";
import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import { logger } from "./middleware/logger";
import monitorReducerEnhancer from "./enhancers/monitorReducer";

const middlewareEnhancer = applyMiddleware(logger, thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);

// export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(rootReducer);
