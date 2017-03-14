'use strict'

const Lucid = use('Lucid')

class Product extends Lucid {

  static get deleteTimestamp () {
    return 'deleted_at'
  }

  sales () {
    return this.hasMany('App/Model/PurchaseDetail')
  }
}

module.exports = Product
