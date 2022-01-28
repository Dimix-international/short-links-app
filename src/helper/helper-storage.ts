import {ShortLinkType} from "../shared/types";

const SHORT_LINKS_LOCALSTORAGE_KEY = 'short-links'

export const getShortLinksStorage = (): ShortLinkType[] | [] => {
    const storedShortLink = localStorage.getItem(SHORT_LINKS_LOCALSTORAGE_KEY);
    return storedShortLink ? JSON.parse(storedShortLink) : []
}
export const setShortLinksStorage = (links: ShortLinkType[]):void => {
    localStorage.setItem(SHORT_LINKS_LOCALSTORAGE_KEY, JSON.stringify(links))
}