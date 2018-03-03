'use strict';

const redis = require('mongodb');

/**
 * The module uses redis to store state
 * @class
 */
class StarbotStoreMongo {
  /**
   * Constructor
   * @param {Object} settings
   */
  async constructor (settings) {
    const { url, options, collection } = settings;
    
    this.db = await MongoClient.connect(url, options);
    this.collection = this.db.collection(collection);
  }

  /**
   * @param {String} key
   */
  async get (key) {
    const doc = await this.collection.findOne({
      key,
    });

    return JSON.parse(doc.key);
  }

  /**
   * @param {String} key 
   * @param {Object} value 
   */
  async set (key, value) {
    await this.collection.updateOne(
      { key },
      { $set: { value } },
      { upsert: true }
    );
  }
}

module.exports = StarbotStoreRedis;
