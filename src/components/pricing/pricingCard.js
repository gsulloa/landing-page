import React, { Component } from "react"
import PropTypes from "prop-types"

class PricingCard extends Component {
  static propTypes = {
    price: PropTypes.string,
    period: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    restrictions: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    important: PropTypes.bool,
  }
  static defaultProps = {
    features: [],
    restrictions: [],
  }
  renderNormal = () => {
    const { price, photo, title, url } = this.props
    return (
      <div className="col-sm-4 col-lg-4">
        <div
          className="card text-center ts-price-box"
          data-animate="ts-fadeInUp"
        >
          <div className="card-header p-0">
            <h5 className="mb-0 py-3 text-white" data-bg-color="#7a9b97">
              {title}
            </h5>
            <div className="ts-title py-5 mb-0">
              <img src={photo} alt="" style={{height: "210px"}} />
            </div>
          </div>
          <div className="card-body p-0">
            <ul className="list-unstyled ts-list-divided">
              <li>{price}</li>
            </ul>
          </div>
          <div className="card-footer bg-transparent pt-0 ts-border-none">
            <a href={url} className="btn btn-outline-dark ts-btn-border-muted">
              Comprar Ahora
            </a>
          </div>
        </div>
      </div>
    )
  }
  renderImportant = () => {
    const { price, photo, title } = this.props
    return (
      <div className="col-sm-4 col-lg-4">
        <div
          className="card text-center ts-price-box ts-price-box__promoted"
          data-animate="ts-fadeInUp"
          data-delay="0.1s"
        >
          <div className="card-header p-0" data-bg-color="#ff6a6a">
            <h5 className="mb-0 py-3 text-white" data-bg-color="#e55f5f">
              {title}
            </h5>
            <div className="ts-title text-white py-5 mb-0">
              <img src={photo} alt="" />
            </div>
          </div>
          <div className="card-body p-0">
            <ul className="list-unstyled ts-list-divided">
              <li>{price}</li>
            </ul>
          </div>
          <div className="card-footer bg-transparent pt-0 ts-border-none">
            <a href="#" className="btn btn-primary">
              Comprar Ahora
            </a>
          </div>
        </div>
      </div>
    )
  }
  render = () => {
    return this.props.important ? this.renderImportant() : this.renderNormal()
  }
}

export default PricingCard
