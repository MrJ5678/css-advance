import { Layout, Header, Aside, Main, Footer } from "./layout"
import Col from "vant/lib/col"
import "vant/lib/col/style"
import Row from "vant/lib/row"
import "vant/lib/row/style"
import BoxCenter from "./box-center"
import SingleCenter from "./single-center"
import BoxSkin from "./box-skin"
import Launch from "./launch"
import FootNav from "./foot-nav"
import { SvgStar } from "./svg-icon"
import Magazine from "./magazine"

const components = {
  CRow: Row,
  CCol: Col,
  Layout,
  Header,
  Aside,
  Main,
  Footer,
  BoxCenter,
  SingleCenter,
  BoxSkin,
  Launch,
  FootNav,
  SvgStar,
  Magazine,
}

const install = app => {
  Object.keys(components).forEach(key => {
    if (key === "CRow" || key === "CCol") {
      app.component(key, components[key])
    } else {
      app.component(components[key]["name"], components[key])
    }
  })
}

const Mui = {
  install,
}

export default Mui
