import React from 'react';
import Progress from 'react-progressbar';

export default class Loading extends React.Component {
  render () {
    return (
      <div>
        <Progress completed={75} />
      </div>
    )
  }
}