// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ....
import * as QRScannerRectView from './QRScannerRectView'
import * as QRScannerView from './QRScannerView'

export default {
  ...QRScannerRectView,
  ...QRScannerView
}
