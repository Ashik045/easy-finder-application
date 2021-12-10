import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import pic1 from '../../image/doctor3.jpg';
import ntwo from '../../image/ntwo.jpg';
import pic3 from '../../image/pexels-matheus-natan-2869266.jpg';
import pic2 from '../../image/umm.jpg';
import NextCommon from '../NextCommon/NextCommon';
import './nextSecond.css';

const NextSecond = () => {
    // commonsec data
    const headerData = 'Explore your option';
    const mutedTxt =
        'Select your preference (shift details, salery, location, etc. and discover jobs most relevant to you we will prefer you to submit your.';
    const btnData = 'Explore Job';

    return (
        <div className="nestSecRow">
            <div className="nfLeft">
                <NextCommon header={headerData} mutedTxt={mutedTxt} btnTxt={btnData} />
            </div>

            <div className="nfRight">
                <div className="nfImg">
                    <img src={ntwo} alt="aa" />

                    <div className="divOne">
                        <div className="firstRow">
                            <div className="icons">
                                <AppRegistrationIcon />
                            </div>

                            <div className="frowBody">
                                <div className="bleft">
                                    <h6>MarianHealth</h6>
                                    <p className="text-muted">Permanent Position</p>
                                </div>

                                <div className="bright">
                                    <p>
                                        <BookmarkBorderIcon />
                                    </p>
                                    <p className="text-muted">2 days ago</p>
                                </div>
                            </div>
                        </div>

                        <div className="secRow">
                            <div className="bleft">
                                <h6>Supervisor - Pharmacist</h6>
                                <p className="text-muted">Greenbrae, California</p>
                            </div>

                            <div className="bright">
                                <p>$502/wk</p>
                            </div>
                        </div>

                        <div className="thirdRow">
                            <div className="bleft">
                                <AvatarGroup max={4}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={pic1}
                                        sx={{ width: 24, height: 24 }}
                                    />
                                    <Avatar src={pic2} alt="aa" sx={{ width: 24, height: 24 }} />
                                    <Avatar
                                        alt="Cindy Baker"
                                        src={pic3}
                                        sx={{ width: 24, height: 24 }}
                                    />
                                    <Avatar
                                        alt="Cindy Baker"
                                        src="/static/images/avatar/3.jpg"
                                        sx={{ width: 24, height: 24 }}
                                    />
                                    <Avatar
                                        alt="Agnes Walker"
                                        src="/static/images/avatar/4.jpg"
                                        sx={{ width: 24, height: 24 }}
                                    />
                                    <Avatar
                                        alt="Trevor Henderson"
                                        src="/static/images/avatar/5.jpg"
                                        sx={{ width: 24, height: 24 }}
                                    />
                                </AvatarGroup>
                            </div>
                            <p className="bmiddle">Interested</p>
                        </div>
                    </div>

                    <div className="divTwo">
                        <p>
                            <DownloadForOfflineIcon />
                        </p>

                        <h6>Your apply process</h6>
                        <p className="text-muted">Apply processing doing</p>
                        {/* progress */}
                        <h5>
                            <CircularProgressbar value={75} text="75%" />
                        </h5>

                        <button type="button" className="btnsss">
                            Cancle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextSecond;
