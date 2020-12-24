import Link from "next/link";

const index = () => {
    return (
        <div>
            <h2>Homepage! Welcome to our website</h2>
            <Link href="/about"><a>About us</a></Link>
        </div>
    )
}

export default index;
