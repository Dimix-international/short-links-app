import {forwardRef} from "react"; //обязательно для анимации компоненты
import cn from 'classnames';
import classes from './Button.module.scss';
import {motion} from "framer-motion";

export const Button = forwardRef((
    {onClick, variant = '', size = 'medium', type = 'button', children},
    ref, //обязательно
) => {
    const mainCn = cn(
        classes.button,
        classes[size],
        classes[variant],
    );

    return (
        <button
            ref={ref} //обязательно
            className={mainCn}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
})

export const MButton = motion(Button); //обернули компонент в motion

//теперь если нужен без анимации import Button, если с анимацией - MButton
