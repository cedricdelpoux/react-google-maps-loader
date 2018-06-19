import load from "little-loader"
import qs from "query-string"

const GOOGLE_MAP_PLACES_API = "https://maps.googleapis.com/maps/api/js"
const NOT_LOADED = 0
const LOADING = 1
const LOADED = 2

const queue = []
let state = NOT_LOADED
let googleMaps = null
let error = null

function loadGoogleMapsSdk(params, callback) {
  if (typeof window !== "undefined") {
    window.gm_authFailure = () => {
      callback({googleMaps, error: "SDK Authentication Error"})
    }

    if (state === LOADED) {
      callback({googleMaps, error})
    } else if (state === LOADING) {
      queue.push(callback)
    } else {
      if (!window.google) {
        window.google = undefined
      }

      state = LOADING
      queue.push(callback)

      load(`${GOOGLE_MAP_PLACES_API}?${qs.stringify(params)}`, err => {
        state = LOADED
        error = err ? "Network Error" : null
        googleMaps = window.google ? window.google.maps : null

        while (queue.length > 0) {
          queue.pop()({googleMaps, error})
        }
      })
    }
  }
}

export default loadGoogleMapsSdk
