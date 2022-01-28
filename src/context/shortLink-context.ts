import {ShortLinkType} from "../shared/types";
import {createContext} from "react";
import {ShortLinkStateType} from "../providers/ShortLinkProvider";

export enum ShortLinkActionOperationType {
    GetShortLink = 'get-short-link',
    Default = 'default',
}

export type ShortLinkActionsType = {
    type: `${ShortLinkActionOperationType}`,
    payload: ShortLinkType
}

export type ShortLinkDispatchType = (action: ShortLinkActionsType) => void
export type ShortLinkContextType = { shortLinksState: ShortLinkStateType, shortLinkDispatch: ShortLinkDispatchType };

export const ShortLinkContext = createContext<ShortLinkContextType | undefined>(undefined);