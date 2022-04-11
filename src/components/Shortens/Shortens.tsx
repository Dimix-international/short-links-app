import {Button} from '../Button';
// @ts-ignore
import classes from './Shortens.module.scss';
import {useShortLink} from "../../hooks/short-link/short-link";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

//AnimatePresence - компонент для появления/исчезновения
const Shortens = () => {
    const {shortLinksState} = useShortLink();
    const [copyLink, setCopyLink] = useState<string | null>(null)

    const copyToClipboard = (value: string) => {
        //--сохраням ссылку в буфер---
        navigator.clipboard.writeText(value).then(() => {
            setCopyLink(value);
        })
    }
    return (
        <section className={classes.Shortens}>
            <div className='container'>
                {shortLinksState.items.map(item => (
                    <AnimatePresence key={item.code}>
                        <motion.div
                            className={classes.item}
                            data-active={copyLink === item.full_short_link2}
                            initial={{
                                opacity: 0,
                                height: 0,
                            }}
                            animate={{
                                opacity: 1,
                                height: 'auto',
                            }}
                        >
                            <span>{item.original_link}</span>
                            <span>{item.full_short_link2}</span>
                            {
                                // @ts-ignore
                                <Button
                                variant="square"
                                onClick={() => copyToClipboard(item.full_short_link2)}
                            >
                                {
                                    copyLink === item.full_short_link2
                                        ? 'Copied'
                                        : 'Copy'
                                }
                            </Button>
                            }
                        </motion.div>
                    </AnimatePresence>
                ))}
            </div>
        </section>
    );
};

export {Shortens};
