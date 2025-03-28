import Style from './SkillCard.module.css'

const SkillCard = (props) =>{
    return(
        <div className={Style.card}>
            <div className={Style.icon}>
                {props.icon}
            </div>
            
            <h2>{props.name}</h2>
            <p>{props.content}</p>
        </div>
    )
}

export default SkillCard