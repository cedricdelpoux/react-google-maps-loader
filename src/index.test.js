import {mount} from "enzyme"
import React from "react"
import GoogleMapsLoader from "./index"

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
