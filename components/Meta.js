import Head from 'next/head';

const Meta = ({title, keywords, description}) => {
    return(
        <>
            <Head>
                <meta charSet='UTF-8'/>
                <title>{title}</title>
                <meta name='keywords' content={keywords} />
                <meta name='description' content={description} />
                <meta name='author' content='Mehdi Rezakhani'/>
            </Head>
        </>
    )
}
Meta.defaultProps = {
    title : "News",
    description : "Created by Next.js",
    keywords : "JS, React, Next"
}
export default Meta;