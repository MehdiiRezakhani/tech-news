import styles from '../styles/Layout.module.css';
import Header from './Header'
import Footer from './Footer';
import Meta from '../components/Meta';

const Layout = ({children}) => {
    return(
        <div className={styles.Layout}>
            <Meta/>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;