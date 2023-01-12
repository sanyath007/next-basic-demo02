import ArticleItem from './ArticleItem'
import styles from '../styles/Article.module.css'

const ArticleList = ({ articles }: { articles: any[] }) => {
    return (
        <div className={styles.grid}>
            {articles.map(article => <ArticleItem key={article.id} article={article} />)}
        </div>
    )
}

export default ArticleList
