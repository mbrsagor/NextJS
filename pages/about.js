import Link from 'next/link';
import Layout from "../components/layout";

export default function about() {
    return (
         <Layout>
            <div>
                <h2>About us page</h2>
                <Link href="/"><a>Homepage</a></Link>
            </div>
        </Layout>
    )
}
