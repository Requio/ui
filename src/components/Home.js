import React from 'react';
import { Link } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

const Home = ({ procs }) => (
  <div>
    {procs.isLoading
      ? <LoadingScreen msg="Loading procs..." />
      : Object.entries(procs.models).map(([,proc]) => (
          <div key={proc.id}>
            <Link to={`/proc/${proc.id}`}>{proc.title}</Link>
          </div>
        ))
    }
  </div>
);

export default Home;
