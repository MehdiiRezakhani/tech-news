const Footer = () => {
    return(
        <footer>
            <h5>COPYRIGHT © 2022 DEVELOPED BY <a href="https://mehdirezakhani.ir" target="_blank" rel="noreferrer">
                MEHDI REZAKHANI</a>
            </h5>
            <style jsx>
                {`
                    footer {
                        margin-top:auto;
                        width:100%;
                        border-top:1px solid #000;
                        text-align:center;
                    }
                    footer a {
                        text-decoration: underline;
                    }
                `}
            </style>
        </footer>
    )
}
export default Footer;