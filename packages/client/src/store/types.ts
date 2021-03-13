import { RouteConfig } from "@/types";
import { InterfaceMainData } from "@/types/yapi";
import { ActionContext } from "vuex";
/**
 * state
 */
export type RootState = {};
export type AppState = {
  created: boolean;
  projectName: string;
};
export type InterfaceState = {
  cookie: string;
  interfaceData: InterfaceMainData[];
};
export type RouteState = {
  routeConfigs: RouteConfig[];
  activeRouteConfig: RouteConfig | null;
};

/**
 * mutations
 */
export type RouteMutations = {
  SET_ROUTE_CONFIGS: (state: RouteState, routeConfigs: RouteConfig[]) => void;
  SET_ACTIVE_CONFIG: (state: RouteState, routeConfigs: RouteConfig) => void;
};
export type InterfaceMutations = {
  SET_COOKIE: (state: InterfaceState, cookie: string) => void;
  UPDATE_INTERFACE_TYPE_DATA: (
    state: InterfaceState,
    payload: UpdateInterfaceTypePayload
  ) => void;
};

/**
 * actions
 */
export type RouteActions = {
  insert: (
    injectee: ActionContext<RouteState, RootState>,
    payload: InsertNewRoutePayload
  ) => void;
  deleteNode: (
    injectee: ActionContext<RouteState, RootState>,
    payload: DeleteNodePayload
  ) => void;
};
export type InterfaceActions = {
  setCookie: (
    injectee: ActionContext<RouteState, RootState>,
    payload: string
  ) => void;
};

/**
 * payload
 */

export type InsertNewRoutePayload = {
  path: string;
  route: RouteConfig;
};

export type UpdateInterfaceTypePayload = {
  data: InterfaceMainData;
};
export type DeleteNodePayload = {
  path: number[];
};

export type InterfaceTypeEnum = "list" | "add" | "edit" | "delete" | string;
export type InterfaceDataType = {
  [K in InterfaceTypeEnum]: InterfaceMainData;
};

export type RouteModuleState = {
  routeConfigs: RouteConfig[];
  activeRouteConfig: RouteConfig | null;
};
