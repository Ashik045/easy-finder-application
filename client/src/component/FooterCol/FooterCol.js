import React from 'react';
import '../Footer/footer.css';

const FooterCol = ({ colHeader, colData }) => {
    const handleClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className="footerCol">
            <h4>{colHeader}</h4>
            {colData.map((datas) => (
                <a className="text-muted" onClick={handleClick} href={datas.link} key={datas.id}>
                    {datas.title}
                </a>
            ))}
        </div>
    );
};
export default FooterCol;
