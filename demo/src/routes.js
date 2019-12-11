import React from "react"
import ReactGoogleMap from "react-google-map"
import readmeHtml from "../../README.md"
import ReactGoogleMapLoader from "../../src"
import demoHtml from "./demo.md"

const routes = [
  {
    path: "/",
    exact: true,
    component: (
      <div>
        <div dangerouslySetInnerHTML={{__html: demoHtml}} />
        <ReactGoogleMapLoader
          params={{
            key: "AIzaSyCLTirc_kwH5fV0RkzOIH_cP5J9SJHW2QA",
            libraries: "places,geometry",
          }}
          render={(googleMaps, error) =>
            googleMaps ? (
              <div style={{height: "300px"}}>
                {error && error}
                <ReactGoogleMap
                  googleMaps={googleMaps}
                  center={{lat: 43.604363, lng: 1.443363}}
                  zoom={8}
                />
              </div>
            ) : (
              <div>
                {error === "Network Error" ? (
                  <p>{error}</p>
                ) : (
                  <p>isLoading...</p>
                )}
              </div>
            )
          }
        />
      </div>
    ),
    label: "Demo",
  },
  {
    path: "/readme",
    html: readmeHtml,
    label: "Read me",
  },
]

export default routes
