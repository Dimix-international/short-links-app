import {axiosInstance} from "../../axiosInstance/axiosInstance";
import {useQuery} from "react-query";
import {QueryKeys} from "./query-keys";
import {Endpoints} from "../../axiosInstance/constant";
import {useShortLink} from "../short-link/short-link";
import {useState} from "react";
import {ShorteningLinkType} from "../../shared/types";

export const createShortLink = async (url: string): Promise<ShorteningLinkType> => {
    const response = await axiosInstance.get(Endpoints.Shorten + `url=${url}`);
    return response.data
}
export const useCreateShortLink = () => {
    const [url, setUtl] = useState('')
    const {shortLinkDispatch} = useShortLink();

    const {error, isLoading} = useQuery(
        [QueryKeys.Shorten, url],
        () => createShortLink(url),
        {
            enabled: !!url,
            refetchOnReconnect: false,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            staleTime:600000,
            cacheTime:900000,
            onSuccess: (data) => {
                if (data && data.ok) {
                    shortLinkDispatch({
                        type: 'get-short-link',
                        payload: data.result
                    })
                }
            }
        }
    );

    return {
        url,
        setUtl,
        error,
        isLoading,
    }
}