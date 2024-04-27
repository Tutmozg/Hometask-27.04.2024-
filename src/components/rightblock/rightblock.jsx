import styles from './rightblock.module.css'
import png1 from '../../images1.jpg'
import png2 from '../../images2.jpg'
import png3 from '../../images3.jpg'
import { useState } from 'react'
function RightBlock() {

    const [style1, setStyle1] = useState({ width: '150px', height: '150px', borderRadius: '15%' })
    const [style2, setStyle2] = useState({ width: '150px', height: '150px', marginLeft: '25px', marginTop: '150px' })
    const [style3, setStyle3] = useState({ width: '150px', height: '150px', borderRadius: '50%', marginLeft: '25px', marginTop: '300px' })


    return (
        <div className={styles['container']}>
            <div>   <img src={png1} style={style1} /></div>
            <div>   <img src={png2} style={style2} /></div>
            <div>   <img src={png3} style={style3} /></div>
        </div>
    )
}

export default RightBlock