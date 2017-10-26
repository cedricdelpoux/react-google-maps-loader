import {mount} from "enzyme"
import React from "react"
import GoogleMapsLoader from "./index"

const html = "Loaded"
const params = {
  key: "AIzaSyCI3cDduwloUnVSfREo-6wuRYTMjOHcQjc",
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
