'use strict';

const mongo = require('mongodb');

/**
 * The module uses mongo to store state
 * @class
 */
class StarbotStoreMongo {
  /**
   * Constructor
   * @param {Object} settings
   */
  constructor (settings) {
    const { url, options } = settings;

    this.client = new mongo.MongoClient(url, options);
    this.settings = settings;
  }

  async connect () {
    const {
      db,
      collection
    } = this.settings;

    if (!this.client.isConnected(db)) {
      await this.client.connect();
      this.collection = this.client.db(db).collection(collection);
    }
  }

  /**
   * @param {String} key
   */
  async get (key) {
    await this.connect();

    const doc = await this.collection.findOne({
      key
    });

    return doc.value;
  }

  /**
   * @param {String} key
   * @param {Object} value
   */
  async set (key, value) {
    await this.connect();

    await this.collection.updateOne(
      { key },
      { $set: { value: value } },
      { upsert: true }
    );
  }
}

module.exports = StarbotStoreMongo;
