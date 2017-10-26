import loadGoogleMapsSdk from "./index"
const params = {
  key: "AIzaSyCI3cDduwloUnVSfREo-6wuRYTMjOHcQjc",
  libraries: "places,geometry",
}

beforeAll(() => {
  const script = document.createElement("script")
  document.body.appendChild(script)
})

describe("loadGoogleMapsSdk", () => {
  test("Loads places and geometry libraries", done => {
    function callback(googleMaps) {
      expect(googleMaps).toEqual(
        expect.objectContaining({
          places: expect.anything(),
          geometry: expect.anything(),
        })
      )
      done()
    }

    loadGoogleMapsSdk(params, callback)
  })
})
