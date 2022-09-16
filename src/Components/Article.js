import "./Article.css";

const Article = (props) => {
    return (
            <div>
                <img className="article-image" src={props.imageUrl} alt="" />
                <p className="article-title">{props.articleTitle}</p>
                <p className="article-price">{props.articlePrice}</p>
            </div>
    )
}

export default Article;