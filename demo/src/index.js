import React from "react"
import ReactDemoPage from "react-demo-page"
import {render} from "react-dom"
import pkg from "../../package.json"
import routes from "./routes"

const header = {
  title: pkg.name,
  buttons: [
    {label: "Github", url: pkg.homepage},
    {label: "Npm", url: `https://www.npmjs.com/package/${pkg.name}`},
    {label: "Download", url: `${pkg.homepage}/archive/master.zip`},
  ],
}

const footer = {
  author: pkg.author,
}

const Demo = () => (
  <ReactDemoPage
    basename={pkg.name}
    header={header}
    footer={footer}
    pages={routes}
    color="#44B39D"
  />
)

// eslint-disable-next-line
render(<Demo />, document.querySelector("#demo"))
