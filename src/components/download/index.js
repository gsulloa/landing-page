import React, { Component } from "react"
import PropTypes from "prop-types"

class Download extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string,
    desktop: PropTypes.array,
    mobile: PropTypes.array,
  }
  render = () => {
    const { title, description, desktop, mobile } = this.props
    return (
      <section
        id="download-now"
        className="ts-block text-center pt-4"
        data-bg-color="#eaeaea"
      >
        <div className="container">
          <div className="ts-title">
            <h2>{title}</h2>
            <h5> {description}</h5>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
              }}
            >
              <div style={{ margin: 30 }}>
                <h4>Aplicación de Escritorio</h4>
                <div
                  style={{
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyContent: "space-around",
                  }}
                >
                  {desktop.map(({ image, links }, i) => (
                    <div key={i}>
                      <img src={image} />
                      <div
                        style={{
                          margin: 30,
                          display: "flex",
                          flexFlow: "row nowrap",
                          justifyContent: "space-around",
                        }}
                      >
                        {links.map(({ url, text }, i) => (
                          <a
                            className="btn btn-outline-primary"
                            style={{
                              color: "black",
                              borderColor: "black",
                              margin: "0 15px",
                            }}
                            href={url}
                            key={i}
                          >
                            <i className="fas fa-sign-in-alt ts-opacity__80 pr-2" />
                            {text}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ margin: 30 }}>
                <h4>Aplicación Móvil</h4>
                <div
                  style={{
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  {mobile.map(({ url, image }, i) => (
                    <a href={url} key={i}>
                      <img src={image} style={{ width: 200 }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Download
