// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onFirstName = () => {
    const {isFirstName} = this.state

    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }
  onLastName = () => {
    const {isLastName} = this.state
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="show-hide-app-container">
        <div className="show-hide-container">
          <h1 className="show-hide-heading">Show/Hide</h1>
          <div className="show-hide-container-button">
            <div className="show-hide">
              <button
                type="button"
                className="show-hide-button"
                onClick={this.onFirstName}
              >
                Show/Hide Firstname
              </button>
              {isFirstName && (
                <div className="show-hide-card-para">
                  <p>Joe</p>
                </div>
              )}
            </div>
            <div className="show-hide">
              <button
                type="button"
                className="show-hide-button"
                onClick={this.onLastName}
              >
                Show/Hide LastName
              </button>
              {isLastName && (
                <div className="show-hide-card-para">
                  <p>Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
