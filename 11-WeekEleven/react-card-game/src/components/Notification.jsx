import React from 'react';
import { connect } from 'react-redux';

const Notification = ({ notification }) => (
  notification ? <div className="notification">{notification}</div> : null
);

const mapStateToProps = state => ({
  notification: state.game.notification
});

export default connect(mapStateToProps)(Notification);