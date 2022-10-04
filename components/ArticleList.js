import Link from 'next/link';
import Styles from '../styles/ArticleList.module.css';
const ArticleList = ({article}) => {
    return (
        <div className={Styles.ArticleList}>
            <Link href="/article/[id]" as={`/article/${article._id}`}>
                <a>
                    <h3>{article.title.toUpperCase()} &rarr;</h3>
                </a>
            </Link>
        </div>
    )
}
export default ArticleList;