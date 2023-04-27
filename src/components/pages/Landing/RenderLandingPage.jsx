import React from 'react';
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>{' '}
      {/* End of Header*/}
      {/* Graphs Section */}
      <div className="graphs-section">
        <>
          <div>
            <img
              src={GrantRatesByOfficeImg}
              className="grant-office-image graph-image"
              alt="Grants Rate by Office Bar Chart img"
            />
          </div>
          <div>
            <img
              src={GrantRatesByNationalityImg}
              className="grants-nationality-image graph-image"
              alt="Grants Rate by Nationality Pie Chart img"
            />
          </div>
          <div>
            <img
              src={GrantRatesOverTimeImg}
              className="grant-overtime-image graph-image"
              alt="Grants Rate Over Time Line Graph Chart img"
            />
          </div>
        </>
      </div>
      {/* Buttons */}
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
      </div>
      {/* End Graphs*/}
      {/* Middle Section */}
      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>{' '}
      {/* End of Middle Section */}
      {/* Bottom Section */}
      <div>
        <div className="bottom-section">
          <p onClick={() => scrollToTop()} className="back-to-top">
            Back To Top ^
          </p>
        </div>
      </div>
    </div> // End of Main
  );
}

export default RenderLandingPage;
