import Style from './HomeSkill.module.css'

const HomeSkill = () => {
    return(
        <div className={Style.HomeSkill}>
            <h1>Skills:</h1>
            <div>
                <div className={Style.cardContainer}>
                    <div className={Style.card}>
                        <div className="cardfsd">
                            <div className="cardfsdin"></div>
                            <div className="cardfsdin"></div>
                            <div className="cardfsdin"></div>
                        </div>
                        <div className="cardfsd">
                            <div className="cardfsdin"></div>
                            <div className="cardfsdinmain"></div>
                            <div className="cardfsdin"></div>
                        </div>
                        <div className="cardfsd">
                            <div className="cardfsdin"></div>
                            <div className="cardfsdin"></div>
                            <div className="cardfsdin"></div>
                        </div>
                    </div>
                    <div className={Style.card}>
                        <div className="cardnw">
                            <div className="cardnwiin"></div>
                            <div className="cardnwiin"></div>
                            <div className="cardnwiin"></div>
                        </div>
                        <div className="cardnw">
                            <div className="cardnwiin"></div>
                            <div className="cardnwmain"></div>
                            <div className="cardnwiin"></div>
                        </div>
                        <div className="cardnw">
                            <div className="cardnwiin"></div>
                            <div className="cardnwiin"></div>
                            <div className="cardnwiin"></div>
                        </div>
                    </div>
                </div>
                <div className={Style.cardContainer}>
                    <div className={Style.card}>
                        <div className="cardds">
                            <div className="carddsin"></div>
                            <div className="carddsin"></div>
                            <div className="carddsin"></div>
                        </div>
                        <div className="cardds">
                            <div className="carddsin"></div>
                            <div className="carddsmain"></div>
                            <div className="carddsin"></div>
                        </div>
                        <div className="cardds">
                            <div className="carddsin"></div>
                            <div className="carddsin"></div>
                            <div className="carddsin"></div>
                        </div>
                    </div>
                    <div className={Style.card}>
                        <div className="cardai">
                            <div className="cardaiin"></div>
                            <div className="cardaiin"></div>
                            <div className="cardaiin"></div>
                        </div>
                        <div className="cardai">
                            <div className="cardaiin"></div>
                            <div className="cardaimain"></div>
                            <div className="cardaiin"></div>
                        </div>
                        <div className="cardai">
                            <div className="cardaiin"></div>
                            <div className="cardaiin"></div>
                            <div className="cardaiin"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSkill;