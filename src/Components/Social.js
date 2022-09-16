import "./Social.css";

const Social = (props) => {
    return (
        <div>
            <a href={props.socialLink}>
                <img src={props.socialImage} alt={props.socialAlt}/>
            </a>
        </div>
    )
}

export default Social;