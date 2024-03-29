/**
 * Mocking client-server processing
 */
const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "stock": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "stock": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "stock": 5}
]

export default {
  getProducts () {
      return new Promise(resolve=>{
        setTimeout(()=>{
          resolve(_products)
        },100)
      })
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
