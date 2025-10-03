import './Home.css'
import TrendingProducts from './TrendingProduct';
function Home() {
    return (
        <>
            <div className="mainContainer">

                {/* Hero Section and Card Section*/}

                <div className='heroSection'>
                    <section id="heroSection">
                        <h1>Welcome to the Home Page</h1>
                        <p className=''>This is the home page of our e-commerce website. Explore our products and enjoy shopping !</p>
                    </section>
                </div>

                {/* cards will be displayed here */}

                <section className="cardSection">
                    <TrendingProducts />
                </section>

                {/*  */}
            </div>

        </>
    )
}

export default Home;