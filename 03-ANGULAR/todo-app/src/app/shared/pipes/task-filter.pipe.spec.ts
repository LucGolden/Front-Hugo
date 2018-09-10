import { TaskFilterPipe } from './task-filter.pipe';
import {Task} from '../models/task';
describe('TaskFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new TaskFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
