import classes from './CallToAction.module.scss';
import {motion} from "framer-motion";

import {Button, MButton} from '../Button'

const textAnimation = {
    hidden: {
        y:-100,
        opacity:0,
    },
    visible:{
        //сделаем поочередную анимацию
        y:0,
        opacity:1,
    }
}

const btnAnimation = {
    hidden: {
        y:100,
        opacity:0,
    },
    visible:{
        //сделаем поочередную анимацию
        y:0,
        opacity:1,
    }
}

const CallToAction = () => {
  return (
    <motion.section
        className={classes.CallToAction}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{
            amount:0.6, //в какой момент по видимости начинать анимацию
        }}
        style={{
            overflow:'hidden'
        }}
    >
      <motion.h2
          variants={textAnimation}
      >
          Boost your links today
      </motion.h2>
      <MButton variants={btnAnimation}>Get Started</MButton>
    </motion.section>
  )
}

export {CallToAction};