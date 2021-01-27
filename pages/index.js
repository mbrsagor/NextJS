import Link from "next/link";
import Layout from "../components/layout";
import Header from '../components/header';

const index = () => {
    return (
        <Layout>
            <div>
                <Header />
                <h2>Homepage! Welcome to our website</h2>
                <Link href="/about"><a>About us</a></Link>
            </div>
        </Layout>
    )
}

export default index;
