import {configure, mount} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import GoogleMapsLoader from "./index"

configure({adapter: new Adapter()})

const html = "Loaded"
const params = {
  key: "AIzaSyCLTirc_kwH5fV0RkzOIH_cP5J9SJHW2QA",
}

const GoogleMapsLoaderFixture = (
  <GoogleMapsLoader
    params={params}
    render={googleMaps => googleMaps && <div>{html}</div>}
  />
)

beforeAll(() => {
  const script = document.createElement("script")
  document.body.appendChild(script)
})

describe("GoogleMapsLoader", () => {
  it("renders", () => {
    mount(GoogleMapsLoaderFixture)
  })
})
