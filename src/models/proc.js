import { Model, field } from 'redux-sideloader';

const { string } = field;

class Proc extends Model {
  static className = 'Proc'
  static fields = {
    title: string(),
    description: string(),
    // account: relation('Account'),
  }
}

export default Proc;
