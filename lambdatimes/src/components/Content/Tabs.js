import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

let tabId = 0;

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map(tab => <Tab key={tabId++} tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} />)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
