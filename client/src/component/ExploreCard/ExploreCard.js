import AddLocationIcon from '@mui/icons-material/AddLocation';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import './exploreCard.css';

const ExploreCard = ({ exploreDatas }) => {
    const { image, header, subHeader, bodyHeader, bodySubHeader, bTxt, day, hour } = exploreDatas;
    return (
        <div className="cardCol">
            <div className="headerr">
                <img src={image} alt={header} />
                <div className="headerRighr">
                    <h3>{header}</h3>
                    <h6 className="text-muted">{subHeader}</h6>
                </div>
            </div>

            <div className="body">
                <h4>{bodyHeader}</h4>

                <h6 className="text-muted py-2">
                    <AddLocationIcon />
                    {bodySubHeader}
                </h6>
                <p className="text-muted">{bTxt}</p>
            </div>

            <div className="bodyFooter">
                <button type="button">Permanent position</button>
                <h6 className="text-muted">{day}</h6>
            </div>

            <div className="footer">
                <h5>{hour}</h5>
                <IconButton aria-label="delete" disabled color="primary">
                    <BookmarkBorderIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default ExploreCard;
