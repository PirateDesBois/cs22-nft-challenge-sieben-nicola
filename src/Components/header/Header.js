import React from 'react';


class Header extends React.Component {
    currentPage = "accueil";
    render() {
        return (
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h1>NFT Challenge, c'est parti!</h1>
                {/* <i class="fab fa-facebook"></i> */}
                <h2 className="text-danger text-uppercase">nft nft nft nft</h2>
            </header>
        );
    }
}
export default Header;
