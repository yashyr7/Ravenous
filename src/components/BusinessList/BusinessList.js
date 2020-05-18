import React from 'react';
import './BusinessList.css';

import {Business} from '../Business/Business';

export class BusinessList extends React.Component {
  render() {
    console.log(this.props.businesses)
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business business={business} key={business.id} />
          })
        }
      </div>
    );
  }
}