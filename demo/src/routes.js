import React from "react"
import ReactGoogleMapLoader from "../../src"
import ReactGoogleMap from "react-google-map"

import demoHtml from "./demo.md"
import readmeHtml from "../../README.md"

const routes = [
  {
    path: "/",
    exact: true,
    component: (
      <div>
        <div dangerouslySetInnerHTML={{__html: demoHtml}} />
        <ReactGoogleMapLoader
          params={{
            key: "AIzaSyCI3cDduwloUnVSfREo-6wuRYTMjOHcQjc",
            libraries: "places,geometry",
          }}
          render={googleMaps =>
            googleMaps && (
              <div style={{height: "300px"}}>
                <ReactGoogleMap
                  googleMaps={googleMaps}
                  center={{lat: 43.604363, lng: 1.443363}}
                  zoom={8}
                />
              </div>
            )}
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
