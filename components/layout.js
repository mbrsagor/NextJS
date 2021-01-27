import Head from 'next/head';

export default function layout({children, title}) {
    return (
        <div>
            <Head>
                <title>Welcome to my next js website</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            </Head>
            <main>
                {children}
            </main>
            <footer>&copy; 2020 All rights reserved Develop by <a href="http://github.com/mbrsagor">Sagor</a></footer>
        </div>
    )
}
