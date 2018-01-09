class MeteorMongo {
  constructor(name, url) {
    if (url) {
      const _driver = new MongoInternals.RemoteCollectionDriver(url);
      this.model = new Mongo.Collection(name, {
        _driver,
      });
    } else {
      this.model = new Mongo.Collection(name);
    }
  }
  find(...args) {
    return this.model.find(...args);
  }
  findOne(...args) {
    return this.model.findOne(...args);
  }
  findAndModify(...args) {
    return this.model.findAndModify(...args);
  }
  aggregate(...args) {
    return this.model.aggregate(...args);
  }
  insert(insert) {
    return this.model.insert({
      ...insert,
      ts: new Date(),
      _updatedAt: new Date(),
    });
  }
  update(selector, modifier, options = {}) {
    return this.model.update(selector, {
      ...modifier,
      $set: {
        _updatedAt: new Date(),
      },
    }, options);
  }
  upsert(selector, modifier, options = {}) {
    return this.model.upsert(selector, {
      ...modifier,
      $set: {
        _updatedAt: new Date(),
      },
    }, options);
  }
  remove(...args) {
    return this.model.remove(...args);
  }
  findOrInsert(selector, insert = {}) {
    const result = this.model.update(selector, {
      $setOnInsert: {
        ...insert,
        ts: new Date(),
        _updatedAt: new Date(),
      },
    }, {
      upsert: true,
    });
    return result;
  }
}
export default MeteorMongo;
