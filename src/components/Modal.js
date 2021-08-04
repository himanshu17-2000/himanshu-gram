import React from 'react'
import { motion } from 'framer-motion'
function Modal({ selected, setselected }) {

    return (
        <motion.div className="backdrop"
        initial={{opacity: 0}}
        animate = {{opacity: 1 }}
            onClick={(e) => {
                if (e.target.classList.contains('backdrop')) {
                    setselected(null)
                }

            }}>
            <motion.img src={selected} alt="enlarge" 
            initial={{y:"-100vh"}}
            animate={{y:0}}
            />
            
        </motion.div>
    )
}

export default Modal
