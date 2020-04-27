import PropTypes from "prop-types"
import React from "react"
import loadGoogleMapsSdk from "./loadGoogleMapsSdk"

class GoogleMapsLoader extends React.Component {
  constructor() {
    super()

    this._isMounted = false
    this.state = {
      googleMaps: null,
      error: null,
    }
  }

  componentDidMount() {
    this._isMounted = true
    const {params} = this.props
    loadGoogleMapsSdk(
      params,
      ({googleMaps, error}) =>
        this._isMounted && this.setState({googleMaps, error})
    )
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const {googleMaps, error} = this.state
    const {render} = this.props
    return render(googleMaps, error)
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
