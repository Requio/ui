import React from 'react';
import { Link } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import Proc from '../models/proc';

class Home extends Proc.Form {
  render() {
    return (
      <div>
        {this.props.procs.isLoading
          ? <LoadingScreen msg="Loading this.props.procs..." />
          : <div>
              {this.props.procs.map(proc => (
                <div key={proc.id}>
                  <Link to={`/proc/${proc.id}`}>{proc.title}</Link>
                  {!proc.isPersisted && <button onClick={proc.save}>Save</button>}
                </div>
              ))}
              <input type="text" value={this.state.procForm.title} onChange={this.updateModelForm('title')} />
              <button onClick={this.createModel}>Create</button>
            </div>
        }
      </div>
    );
  }
}

export default Home;
