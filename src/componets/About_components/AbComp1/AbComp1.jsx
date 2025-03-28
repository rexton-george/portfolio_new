import Style from './AbComp1.module.css'

const AbComp1 = () =>{
    return(
        <div className={Style.AbComp1}>
        <h1 className={Style.heading}><span>ABOUT</span>ME :</h1>
        <div className={Style.comp1}>
            <div className={Style.image}></div>
            <div className={Style.content}>
                <h1>Name: REXTON GEORGE R,</h1>
                <h1>Role: Pre-final year CSE student,</h1>
                <div className={Style.contentch}>
                    <h2>From: NOV/2022</h2>
                    <h2>To: APR/2026</h2>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AbComp1;