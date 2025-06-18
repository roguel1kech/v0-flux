import './Profile.css';
import Footer from "../components/Footer";

export default function Profile() {
    return (
        <>
            <div className="profile-page">

                <header className="profile-header">
                    <img className="header-wave" src='../assets/profile/banner.svg' ></img>
                    <img className="avatar" src="" alt=""/>
                    <span className="username">@durov</span>
                </header>

                <section className="balance-card">
                    <div className="balance-label">Баланс</div>
                    <div className="balance-value">₽234442</div>
                    <button className="balance-add">+</button>

                </section>

                <section className="gift-block">
                    <h2 className="block-title">Мои подарки</h2>
                    <div className="gift-grid">
                        <article className="gift-card">
                            <img className="gift-img" src="" alt=""/>
                            <div className="gift-info">
                                <span className="gift-name">Plush Pepe</span>
                                <span className="gift-price">1396 RUB</span>
                            </div>
                            <button className="gift-select"></button>
                        </article>

                        <article className="gift-card">
                            <img className="gift-img" src="" alt=""/>
                            <div className="gift-info">
                                <span className="gift-name">Plush Pepe</span>
                                <span className="gift-price">1396 RUB</span>
                            </div>
                            <button className="gift-select"></button>
                        </article>
                    </div>
                </section>

                <section className="gift-block">
                    <h2 className="block-title">Избранное</h2>
                    <div className="gift-grid">
                        <article className="gift-card">
                            <img className="gift-img" src="" alt=""/>
                            <div className="gift-info">
                                <span className="gift-name">Plush Pepe</span>
                                <span className="gift-price">1396 RUB</span>
                            </div>
                            <button className="gift-fav"></button>
                        </article>

                        <article className="gift-card">
                            <img className="gift-img" src="" alt=""/>
                            <div className="gift-info">
                                <span className="gift-name">Plush Pepe</span>
                                <span className="gift-price">1396 RUB</span>
                            </div>
                            <button className="gift-fav"></button>
                        </article>
                    </div>
                </section>

                <nav className="bottom-nav">
                    <button className="nav-btn basket">

                    </button>
                    <button className="nav-btn grid">

                    </button>
                    <button className="nav-btn minus">

                    </button>
                </nav>

            </div>
            <Footer></Footer>
        </>
    )

}
