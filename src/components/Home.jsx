function Home() {
    return (
        <>
            <div className="mainContainer">

                {/* Hero Section and Card Section*/}

                <div Container className='heroSection'>
                    <section id="heroSection">
                        <h1>Welcome to the Home Page</h1>
                        <p>This is the home page of our e-commerce website. Explore our products and enjoy shopping!</p>
                    </section>
                </div>

                {/* cards will be displayed here */}

                <section className="cardSection">
                    <div className="card">
                        <h2>Featured Product 1</h2>
                        <p>Discover our top-rated product that customers love.</p>
                    </div>
                    <div className="card">
                        <h2>Featured Product 1</h2>
                        <p>Discover our top-rated product that customers love.</p>
                    </div>
                    <div className="card">
                        <h2>Featured Product 1</h2>
                        <p>Discover our top-rated product that customers love.</p>
                    </div>
                    <div className="card">
                        <h2>Featured Product 1</h2>
                        <p>Discover our top-rated product that customers love.</p>
                    </div>
                    <div className="card">
                        <h2>Featured Product 1</h2>
                        <p>Discover our top-rated product that customers love.</p>
                    </div>
                </section>

                {/*  */}
            </div>

        </>
    )
}

export default Home;