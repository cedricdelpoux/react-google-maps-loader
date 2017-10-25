import React from "react"
import PropTypes from "prop-types"

import loadGoogleMapsSdk from "./loadGoogleMapsSdk"

class GoogleMapsLoader extends React.Component {
  constructor() {
    super()

    this.state = {
      googleMaps: null,
    }
  }

  componentWillMount() {
    const {params} = this.props
    loadGoogleMapsSdk(params, googleMaps => this.setState({googleMaps}))
  }

  render() {
    const {googleMaps} = this.state
    const {render} = this.props
    return <div>{render(googleMaps)}</div>
  }
}

GoogleMapsLoader.propTypes = {
  params: PropTypes.shape({
    key: PropTypes.string.isRequired,
    libraries: PropTypes.string,
  }).isRequired,
  render: PropTypes.func.isRequired,
}

export default GoogleMapsLoader
