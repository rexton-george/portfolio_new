import Style from './EDU.module.css'

const EDU = (props) =>{
    let url = props.img
    return(
        <div className={Style.EDU}>
            <h1>{props.heading}</h1>
            <img src={props.img} alt="" />
            <p>{props.content}</p>
            <div>
                <h2>
                    {props.marktitle} : {props.mark}                     
                </h2>
               
            </div>

        </div>
    )
}

export default EDU;