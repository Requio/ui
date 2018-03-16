import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        {this.props.procs.map(proc => (
          <div key={proc.id}>
            <Link to={`/proc/${proc.id}`}>{proc.title}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
