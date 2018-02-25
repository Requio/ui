import { Model, field } from 'redux-sideloader';

const { text } = field;

class Proc extends Model {
  static className = 'Proc'
  static fields = {
    title: text(),
    description: text(),
    // account: relation('Account'),
  }
}

export default Proc;
