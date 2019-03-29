import loadGoogleMapsSdk from "./index"

const params = {
  key: "AIzaSyCI3cDduwloUnVSfREo-6wuRYTMjOHcQjc",
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

beforeEach(() => {
  // This is required to reset the state and googleMaps
  // module-level variables between each test
  require("./index")
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

  test("Returns Google Maps Authentication Error", done => {
    function callback({error}) {
      // This is a weird way to write this, but the problem is
      // that loading the sdk and checking authentication are
      // asynchronous and concurrent, and getting the SDK
      // set up takes less time.
      // What will happen here is that the callback will be
      // called once with the `googleMaps` object and no error,
      // and then called again with the SDK authentication error.
      // My assumption is that this means the SDK will be available
      // but unusable in the intervening time, or that the SDK will
      // be available and usable, but be disabled once the authentication
      // error comes back.
      if (error) {
        expect(error).toEqual("SDK Authentication Error")
        done()
      }
    }

    loadGoogleMapsSdk(fakeParams, callback)
  }, 10000)

  test("Returns Network Error", done => {
    function callback({error}) {
      expect(error).toEqual("Network Error")
      done()
    }

    loadGoogleMapsSdk(null, callback, "notaurl")
  }, 10000)
})
