import Link from 'next/link'
import styles from '../styles/Article.module.css'

const ArticleItem = ({ article }: { article: any }) => {
    return (
        <Link href="/articles/[id]" as={`/articles/${article.id}`}>
            <div className={styles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </div>
        </Link>
    )
}

export default ArticleItem
