import React from 'react';

function Home() {
    return (
        <div id="home">
            <h1>Akhil Dhanala</h1>
            <br/>
            <ul className="social">
                <li>
                    <a href="https://www.linkedin.com/in/akhil-dhanala/">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/akhild-uci">
                        <i className="fa fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto:akhil.dhanala@gmail.com">
                        <i className="fa fa-envelope"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Home;
