## Code

```javascript
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGoogleMap from "react-google-map"

const YourComponent = () => 
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
```

## Demo
