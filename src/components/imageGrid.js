import React from 'react'
import useFirestore from '../Hooks/useFirestore'
import { motion } from 'framer-motion';

function ImageGrid({ setselected }) {
    const { docs } = useFirestore('images');
    console.log(docs)
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}

                    whileHover={{ opacity: 1 }}
                    layout
                    onClick={() => setselected(doc.URL)}>

                    <motion.img src={doc.URL} alt="uploaded pic "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}

                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid
