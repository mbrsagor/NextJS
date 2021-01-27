import Link from 'next/link';
import Layout from "../components/layout";
import Header from "../components/header";

export default function about() {
    return (
         <Layout>
            <div>
                <Header />
                <h2>About us page</h2>
                <Link href="/"><a>Homepage</a></Link>
            </div>
        </Layout>
    )
}
