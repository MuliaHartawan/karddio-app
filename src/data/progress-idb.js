import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { nanoid } = require('nanoid');

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_COMPLETE, OBJECT_ONPROGRESS} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_ONPROGRESS, { keyPath: 'id' });
    database.createObjectStore(OBJECT_COMPLETE, { keyPath: 'id' });
  },
});

const ProgressIdb = {
  async getFinishedProgress() {
    return (await dbPromise).getAll(OBJECT_COMPLETE);
  },
  async getOnProgress() {
    return (await dbPromise).getAll(OBJECT_ONPROGRESS);
  },
  async addProgress(name) {
    const id = nanoid(16);

    const templateData = {
        id: id,
        workout : name,
        workoutDuration: '15 mins',
        workoutFinished: false
    };

    return (await dbPromise).add(OBJECT_ONPROGRESS, templateData);
  },

  async finishProgress(progress) {
    const {id, workout, workoutDuration} = progress;
    
    const data = {
      id: id,
      workout : workout,
      workoutDuration: workoutDuration,
      workoutFinished: true
    }
    console.log(progress);
    return (await dbPromise).delete(OBJECT_ONPROGRESS, id) && (await dbPromise).add(OBJECT_COMPLETE, data);
  }
};

export default ProgressIdb;
