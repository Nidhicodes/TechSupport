import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">TechSupport</span></h1>
            </header>
            <main className="public__main">
                <p>Located in the town of Dehradun, TechSupport  provides a trained staff ready to support your tech needs.</p>
                <address className="public__addr">
                    TechSupport<br />
                    14/C MDDA road<br />
                    Dehradun, Uttarakhand 12345<br />
                    <a href="ph:+919999999999">(91) 999-9999999</a>
                </address>
                <br />
                <p>Owner: Nidhi Singh</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public