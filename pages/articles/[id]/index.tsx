import { NextRouter, useRouter } from "next/router"
import Link from "next/link"

const article = ({ article }: { article: any }) => {
    // const router: NextRouter = useRouter()
    // const { id } = router.query

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />

            <Link href="/">Go Back</Link>
        </div>
    )
}

export const getServerSideProps = async (context: any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export default article
