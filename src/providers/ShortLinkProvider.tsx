import {ShortLinkType} from "../shared/types";
import {ReactNode, useMemo, useReducer} from "react";
import {shortLinkReducer} from "../reducers/shortLink-reducer";
import {getShortLinksStorage} from "../helper/helper-storage";
import {ShortLinkContext} from "../context/shortLink-context";

export type ShortLinkStateType = {
    items: ShortLinkType[]
}

export const ShortLinksProvider = ({children}: { children: ReactNode }) => {
    const [shortLinksState, shortLinkDispatch] = useReducer(shortLinkReducer, {
        items: getShortLinksStorage()
    })

    const value = useMemo(() => ({
        shortLinksState,
        shortLinkDispatch
    }), [shortLinksState]);

    return <ShortLinkContext.Provider value={value}>
        {children}
    </ShortLinkContext.Provider>
}