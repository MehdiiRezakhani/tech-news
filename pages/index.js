import styles from '../styles/Home.module.css'
import ArticleList from '../components/ArticleList';
export default function Home({articles}) {
  return (
    <div className={styles.Home}>
      <h1>TechNews</h1>
      <p>keep up with the latest news and events from the world of web technology</p>
      {articles.map(item => <ArticleList key={item._id} article={item}/>)}
    </div>
  )
}

export const getStaticProps = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5392670597msh0ae8f62ff8549afp1f8104jsneffff53f4f26',
      'X-RapidAPI-Host': 'rapid-tech-news.p.rapidapi.com'
    }
  };
  const response = await fetch('https://rapid-tech-news.p.rapidapi.com/api', options);
  const articles = await response.json();
  return {
    props: {
      articles
    }
  }
}
