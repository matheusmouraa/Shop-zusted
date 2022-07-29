import { createServer } from 'miragejs'

import HyperxCloundStringPNG from './assets/hyperxcloudstinger.png'
import HyperxCloundRevolverPNG from './assets/hyperxcloudrevolver.png'
import IpadairPNG from './assets/ipadair.png'
import Applewatchseries7PNG from './assets/applewatch-series7.png'
import Iphone12x64PNG from './assets/iphone12x64.png'
import MacbookairPNG from './assets/macbookair.png'
import AirpodsPNG from './assets/airpods.png'
import Iphone11x128PNG from './assets/iphone11x128.png'

export default function () {
  createServer({
    routes() {
      this.get('/products', () => ({
        products: [
          {
            id: 1,
            name: 'Headset Cloud Stinger',
            image: HyperxCloundStringPNG,
            price: '600.00'
          },
          {
            id: 2,
            name: 'Headset Cloud Revolver',
            image: HyperxCloundRevolverPNG,
            price: '1000.00'
          },
          {
            id: 3,
            name: 'iPad',
            image: IpadairPNG,
            price: '4200.00'
          },
          {
            id: 4,
            name: 'Apple Watch Series 7',
            image: Applewatchseries7PNG,
            price: '3200.00'
          },
          {
            id: 5,
            name: 'iPhone 12 64 GB',
            image: Iphone12x64PNG,
            price: '6500.00'
          },
          {
            id: 6,
            name: 'Macbook Air',
            image: MacbookairPNG,
            price: '8200.00'
          },
          {
            id: 7,
            name: 'AirPods',
            image: AirpodsPNG,
            price: '1200.00'
          },
          {
            id: 8,
            name: 'Iphone 11 128 GB',
            image: Iphone11x128PNG,
            price: '5000.00'
          }
        ]
      }))
    }
  })
}
