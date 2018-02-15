import Model from './base-model';

class Proc extends Model {}

export const proc = new Proc();

export const reducer = proc.reducer;

window.proc = proc;
