import Styles from './Button.module.css'

const Button = (props) => {
    return(
        <a className={Styles.Button} href={"./" + props.name}><b>{props.name}</b></a>
    )   
}

export default Button;