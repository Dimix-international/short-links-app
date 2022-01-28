import {useContext} from "react";
import {ShortLinkContext} from "../../context/shortLink-context";

export const useShortLink = () => {
    const context = useContext(ShortLinkContext);
    if (!context) throw new Error('useShortLink must be used inside a ShortLink');
    return context;
}