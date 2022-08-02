import { createServer } from 'miragejs'

export default function () {
  createServer({
    routes() {
      this.get('/products', () => ({
        products: [
          {
            id: 1,
            name: 'Headset Cloud Stinger',
            image:
              'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
            price: '600'
          },
          {
            id: 2,
            name: 'Headset Cloud Revolver',
            image:
              'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp',
            price: '1000'
          },
          {
            id: 3,
            name: 'iPad',
            image:
              'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp',
            price: '4200'
          },
          {
            id: 4,
            name: 'Apple Watch Series 7',
            image:
              'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp',
            price: '3200'
          },
          {
            id: 5,
            name: 'iPhone 12 64 GB',
            image:
              'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp',
            price: '6500'
          },
          {
            id: 6,
            name: 'Macbook Air',
            image:
              'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
            price: '8200'
          },
          {
            id: 7,
            name: 'AirPods',
            image:
              'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
            price: '1200'
          },
          {
            id: 8,
            name: 'Iphone 11 128 GB',
            image:
              'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp',
            price: '5000'
          }
        ]
      }))
    }
  })
}
