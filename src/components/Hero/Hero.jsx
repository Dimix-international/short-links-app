import classes from './Hero.module.scss';
import {Button, MButton} from '../Button';
import Img from '../../images/illustration-working.svg';

import {motion} from "framer-motion";

const textAnimation = {
    hidden: {
        x:-100,
        opacity:0,
    },
    visible: custom => ({
        //сделаем поочередную анимацию
        x:0,
        opacity:1,
        transition: {
            delay: custom * 0.2,
        }
    })
}


const Hero = () => {
  return (
    <motion.section
        className={`${classes.hero} container`}
        initial={"hidden"} //изначально все элементы скрыты
        whileInView={"visible"} //когда мы находимся в зоне видимости
    >
        <div className={classes.imgContainer}>
         <img src={Img} alt="hero" className={classes.img} />
        </div>
     <article className={classes.text}>
         <motion.h1
             custom={1}
             variants={textAnimation} //добавили анимацию
             className={classes.title}>More than just shorter links
         </motion.h1>
         <motion.p
             custom={2}
             variants={textAnimation} //добавили анимацию
             className={classes.description}>
             Build your brand's recognition and get detailed insights on how your links are performing.</motion.p>
         <MButton
             custom={4}
             variants={textAnimation} //добавили анимацию
             size="large">
             Get Started</MButton>
    </article> 
    </motion.section>
  )
}

export {Hero};
