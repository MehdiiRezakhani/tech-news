import Meta from "../../../components/Meta"
const ArticleDetail = ({article}) => {
    return(
        <div>
            <Meta title={article.title.toUpperCase()}/>
            <h2>{article.title.toUpperCase()}</h2>
            <img src={article.image}/>
            <p>{article.summary}</p>
            <a href={article.url} target="_blank" rel="noreferrer">Read on {article.source}</a>
            <style jsx>
                {`
                    div {
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        border : 1px solid #c9c9c9;
                        border-radius: 10px;
                        padding:10px;
                        margin:20px;
                    }
                    h2 {
                        font-size:20px;
                    }
                    p{
                        font-size:15px;
                    }
                    img {
                        width: 250px;
                        object-fit:cover;
                        border-radius:20px;
                    }
                    a {
                        display:block;
                        padding:10px 15px;
                        margin:10px;
                        font-size:12px;
                        background-color: #000;
                        color:#fff;
                        border-radius:10px;
                        transition: all ease 0.3s;
                    }
                    a:hover {
                        background-color: #fff;
                        color:#000;
                        border:1px solid #000;
                    }
                `}
            </style>
        </div>
    )
}

export const getServerSideProps = async context => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5392670597msh0ae8f62ff8549afp1f8104jsneffff53f4f26',
        'X-RapidAPI-Host': 'rapid-tech-news.p.rapidapi.com'
      }
    };
    const response = await fetch('https://rapid-tech-news.p.rapidapi.com/api', options);
    const articles = await response.json();
    const article = articles.find(item => item._id == context.params.id)
    return {
      props: {
        article
      }
    }
  }
// export const getStaticProps  = async context => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await response.json();
//     return {
//         props: {
//             article
//         }
//     }
// }
// export const getStaticPath = async => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/post`)
//     const article = await response.json();
//     const ids = article.map(item=>item.id);
//     const paths = ids.map(id => ({params: {id:id.toString()}}))
//     return {
//         paths,
//         fallback: false
//     }
// }
export default ArticleDetail;