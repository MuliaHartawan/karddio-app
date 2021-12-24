import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { nanoid } = require('nanoid');

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_COMPLETE, OBJECT_ONPROGRESS, OBJECT_TOKEN} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_ONPROGRESS, { keyPath: 'id' });
    database.createObjectStore(OBJECT_COMPLETE, { keyPath: 'id' });
    database.createObjectStore(OBJECT_TOKEN, { keyPath: 'id' });
  },
});

const ProgressIdb = {
  async getToken() {
    return (await dbPromise).getAll(OBJECT_TOKEN);
  },
  async addToken(token) {
    const check = this.getToken()

    if (check.length===1) {
      (await dbPromise).delete(OBJECT_TOKEN, 1);
    }
    const tokenData = {
      id: 1,
      token: token
      
    }
    return (await dbPromise).add(OBJECT_TOKEN, tokenData);
  },
  async deleteToken() {
    return (await dbPromise).delete(OBJECT_TOKEN, 1);
  },
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
        workoutFinished: false
    };

    return (await dbPromise).add(OBJECT_ONPROGRESS, templateData);
  },

  async finishProgress(progress) {
    const {id, workout} = progress;
    
    const data = {
      id: id,
      workout : workout,
      workoutFinished: true
    }
    return (await dbPromise).delete(OBJECT_ONPROGRESS, id) && (await dbPromise).add(OBJECT_COMPLETE, data);
  }
};

export default ProgressIdb;
