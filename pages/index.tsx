import Head from 'next/head'
import { Inter } from '@next/font/google'
import { server } from '../config';
import ArticleList from '../components/ArticleList';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ articles }: { articles: any[] }) {
  console.log(articles);

  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development, programming" />
      </Head>

      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }
