import React, { Component } from "react";

// Code DelayedButton Component Here
class DelayedButton extends Component {

    handleDelay = (e) => {
        e.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(e)
        },
            this.props.delay)
    }

    render() {
        return(
          <div>
              <button onClick={this.handleDelay}>

              </button>
          </div>
        )
    }
}


export default DelayedButton