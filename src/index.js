import React, {Component} from "react"
import load from "little-loader"
import qs from "query-string"

const GOOGLE_MAP_PLACES_API = "https://maps.googleapis.com/maps/api/js"
const NOT_LOADED = 0
const LOADING = 1
const LOADED = 2

const queue = []
let state = NOT_LOADED
let sdk

function useGoogleMapSdk(params, callback) {
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

    load(`${GOOGLE_MAP_PLACES_API}?${qs.stringify(params)}`, (err) => {
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

const GoogleMapsLoader = (TargetComponent, params) => (
  class extends Component {
    constructor() {
      super()
      this.state = {
        googleMaps: null,
      }
    }

    componentWillMount() {
      useGoogleMapSdk(params, googleMaps => this.setState({googleMaps}))
    }

    render() {
      const {googleMaps} = this.state
      return googleMaps
        ? <TargetComponent googleMaps={googleMaps} {...this.props} />
        : null
    }
  }
)

export default GoogleMapsLoader
