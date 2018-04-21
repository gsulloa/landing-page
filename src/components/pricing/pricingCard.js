import React, { Component } from "react"

class PricingCard extends Component {
  static defaultProps = {
    features: [],
    restrictions: [],
  }
  renderNormal = () => {
    const { price, period, features, restrictions, title } = this.props
    return (
      <div className="col-sm-4 col-lg-4">
        <div className="card text-center ts-price-box" data-animate="ts-fadeInUp">
          <div className="card-header p-0">
            <h5 className="mb-0 py-3 text-white" data-bg-color="#7a9b97">{title}</h5>
            <div className="ts-title py-5 mb-0">
              <h3 className="mb-0 font-weight-normal">{price}</h3>
              <small className="ts-opacity__50">{period}</small >
            </div>
          </div>
          <div className="card-body p-0">
            <ul className="list-unstyled ts-list-divided">
              {features.map((feature, i) => <li key={i}>{feature}</li>)}
              {restrictions.map((restriction, i) => 
                <li key={i}><s className="ts-opacity__50">{restriction}</s></li>
                )}
            </ul>
          </div>
          <div className="card-footer bg-transparent pt-0 ts-border-none">
            <a href="#" className="btn btn-outline-dark ts-btn-border-muted">Select Now</a>
          </div>
        </div>
      </div>
    )
  }
  renderImportant = () => {
    const { price, period, features, restrictions } = this.props
    return (
      <div className="col-sm-4 col-lg-4">
      <div className="card text-center ts-price-box ts-price-box__promoted" data-animate="ts-fadeInUp" data-delay="0.1s">
          <div className="card-header p-0" data-bg-color="#ff6a6a">
              <h5 className="mb-0 py-3 text-white" data-bg-color="#e55f5f">Premium</h5>
              <div className="ts-title text-white py-5 mb-0">
                <h3 className="mb-0 font-weight-normal">{price}</h3>
                <small className="ts-opacity__50">{period}</small >
              </div>
          </div>
          <div className="card-body p-0">
              <ul className="list-unstyled ts-list-divided">
                {features.map((feature, i) => <li key={i}>{feature}</li>)}
                {restrictions.map((restriction, i) => 
                  <li key={i}><s className="ts-opacity__50">{restriction}</s></li>
                  )}
              </ul>
          </div>
          <div className="card-footer bg-transparent pt-0 ts-border-none">
              <a href="#" className="btn btn-primary">Select Now</a>
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
