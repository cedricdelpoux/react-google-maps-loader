import loadGoogleMapsSdk from "./index"
const params = {
  key: "AIzaSyCLTirc_kwH5fV0RkzOIH_cP5J9SJHW2QA",
  libraries: "places,geometry",
}

const fakeParams = {
  key: "1234555666",
  libraries: "places,geometry",
}

beforeAll(() => {
  const script = document.createElement("script")
  document.body.appendChild(script)
})

describe("loadGoogleMapsSdk", () => {
  test("Loads places and geometry libraries", done => {
    function callback({googleMaps}) {
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

  test("Returns Google Maps Authntication Error", done => {
    function callback({error}) {
      window.setTimeout(() => {
        expect(error).toEqual("SDK Authentication Error")
      }, 1000)
      done()
    }

    loadGoogleMapsSdk(fakeParams, callback)
  })

  test("Returns Network Error", done => {
    function callback({error}) {
      window.setTimeout(() => {
        expect(error).toBe("Network Error")
      }, 1000)
      done()
    }

    loadGoogleMapsSdk(null, callback)
  })
})
