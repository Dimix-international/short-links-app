import {
    ShortLinkActionOperationType,
    ShortLinkActionsType
} from "../context/shortLink-context";
import {ShortLinkStateType} from "../providers/ShortLinkProvider";
import {setShortLinksStorage} from "../helper/helper-storage";

export type ShortLinkReducerReturnType = {
    [key in `${ShortLinkActionOperationType}`]: () => ShortLinkStateType
}

export const shortLinkReducer = (state: ShortLinkStateType, action: ShortLinkActionsType): ShortLinkStateType => {
    const getNewShortLink = (): ShortLinkStateType => {
        const findCode = state.items.find(item => item.code === action.payload.code)
        if (!findCode) {
            const newState = {...state, items: [...state.items, action.payload]}
            setShortLinksStorage(newState.items);
            return newState
        } else {
            return state
        }
    }

    const actionsShortLink = {
        'get-short-link': getNewShortLink,
        'default': () => state
    } as ShortLinkReducerReturnType;

    return (actionsShortLink[action.type] || actionsShortLink['default'])();
}