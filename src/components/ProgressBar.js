
import React, { useEffect } from 'react'
import useStorage from '../Hooks/useStorage'
import { motion } from 'framer-motion'
const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    console.log(progress, url)
    useEffect(() => {
        if (url) {
            setFile(null);
        }

    }, [url, setFile])
    return (
        <div className="progress-container">

            <motion.div className="progress-bar"
                initial={{ width: 0 }}
                animate={{ width: progress + '%' }}

            >

            </motion.div>
        </div>
    )
}

export default ProgressBar;
