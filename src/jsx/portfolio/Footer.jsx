import React from "react";
import portfolio from 'json/PortfolioInfo.json'

export
const DevCredits = () => (
    <span>© 2026 Desenvolvido por {portfolio.developer}</span>
);

export
const FooterLinks = () => (
    <div>
        <a href='https://github.com/GustavoBrizola/Portfolio' target='_blank' rel='noopener noreferrer'>Repositório</a>
        <a href='https://github.com/GustavoBrizola/Portfolio/issues' target='_blank' rel='noopener noreferrer'>Report Bug</a>
    </div>
);

export
const BuildVersion = () => (
    <span>{portfolio.version}</span>
);