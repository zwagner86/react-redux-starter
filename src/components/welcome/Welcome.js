import React from 'react';
import { connect } from 'react-redux';
import './Welcome.css';

const Welcome = ( { welcome } ) => {
    return (
      <div className="Welcome">
          <p className="Welcome-msg">
              {welcome.msg}
          </p>
      </div>
    );
};

function mapStateToProps({ welcome }) {
    return { welcome };
}

export default connect(mapStateToProps)(Welcome);