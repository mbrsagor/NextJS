import Link from "next/link";
import Layout from "../components/layout";

const index = () => {
    return (
        <Layout>
            <div>
                <h2>Homepage! Welcome to our website</h2>
                <p>{title}</p>
                <Link href="/about"><a>About us</a></Link>
            </div>
        </Layout>
    )
}

export default index;
