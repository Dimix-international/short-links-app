import {Header} from '../Header';
import {Hero} from '../Hero';
import {Form} from '../Form';
import {Shortens} from '../Shortens';
import {Features} from '../Features';
import {CallToAction} from '../CallToAction';
import {Footer} from '../Footer';
import {QueryClientProvider} from "react-query";
import {queryClient} from "../../hooks/react-query/query-client";
import {ReactQueryDevtools} from "react-query/devtools";
import {ShortLinksProvider} from "../../providers/ShortLinkProvider";
import {ChartJs} from "../ChartJs/ChartJs";

function App() {
    return (
        <>
           {/* <QueryClientProvider client={queryClient}>
                <ShortLinksProvider>
                    <Header/>
                    <Hero/>
                    <Form/>
                    <Shortens/>
                    <Features/>
                    <CallToAction/>
                    <Footer/>
                    <ReactQueryDevtools/>
                </ShortLinksProvider>
            </QueryClientProvider>*/}
            <ChartJs />
        </>
    );
}

export {App};
