import { useState } from 'react'
import styles from './leftblock.module.css'
function LeftBlock() {
    const [line1, setText1] = useState('binrbnir')
    const [line2, setText2] = useState('grgrwrgw')
    const [line3, setText3] = useState('grrww')
    return (
        <div className={styles['container']}>
            <ul>
                <li >{line1}</li>
                <li >{line2}</li>
                <li >{line3}</li>
            </ul>
        </div>
    )
}

export default LeftBlock