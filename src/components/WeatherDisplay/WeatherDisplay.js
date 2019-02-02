import React from 'react';
import { connect } from 'react-redux';

const Weather = props => {
  return (
    <div>
      {JSON.stringify(props.store)}
    </div>
  )
}

const mapStateToProps = store => ({
  store
})
export default connect(mapStateToProps)(Weather);