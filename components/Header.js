import Link from 'next/link';
const Header = () => {
    return (
        <header>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
            </ul>
            <style jsx>{`
                header {
                    width:100%;
                    background-color:#000;
                }
                ul {
                    list-style-type:none;
                    display:flex;
                    color:#fff;
                    }
                li {
                    padding:20px;
                }
                `}
            </style>
        </header>
    )
}
export default Header