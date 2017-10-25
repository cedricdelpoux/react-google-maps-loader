import load from "little-loader"
import qs from "query-string"

const GOOGLE_MAP_PLACES_API = "https://maps.googleapis.com/maps/api/js"
const NOT_LOADED = 0
const LOADING = 1
const LOADED = 2

const queue = []
let state = NOT_LOADED
let sdk

function loadGoogleMapsSdk(params, callback) {
  if (typeof window !== "undefined") {
    if (state === LOADED) {
      callback(sdk)
    } else if (state === LOADING) {
      queue.push(callback)
    } else if (window.google != null && window.google.maps != null) {
      state = LOADED
      sdk = window.google.maps
      callback(sdk)
    } else {
      state = LOADING
      queue.push(callback)

      load(`${GOOGLE_MAP_PLACES_API}?${qs.stringify(params)}`, err => {
        if (err) {
          throw new Error("Unable to load Google Map SDK")
        }

        state = LOADED
        sdk = window.google.maps

        while (queue.length > 0) {
          queue.pop()(sdk)
        }
      })
    }
  }
}

export default loadGoogleMapsSdk
