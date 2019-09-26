// import React from 'react'

// const OnboardingComplete = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default OnboardingComplete

import React, { Component } from "react";
import { Icon, Message } from "semantic-ui-react";
import styled from "styled-components";

const FillMe = styled.div`
  .ui.success.message {
    width: 95%;
    background-color: green;
    color: white;
    text-align: left;
    font-size: 1.3rem;
    position: absolute !important;

    margin: 1em !important;
    right: 1em;
  }
`;

class OnboardingComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: false }), 3000);
  }

  render() {
    const { error, info, success, children } = this.props;
    const { visible } = this.state;
    return visible ? (
      <FillMe>
        <Message info={info} error={error} success={success}>
          <Icon
            name={
              success
                ? "check circle"
                : error
                ? "times circle"
                : info
                ? "info circle"
                : null
            }
          />
          <b>
            {success
              ? "Congratulations! Your account is setup. Now Create your prisoner profile. "
              : error
              ? "Oups! "
              : info
              ? "Heads Up! "
              : null}
          </b>
          <span>{children}</span>
          <Icon
            name="times"
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.setState({ visible: false })}
          />
        </Message>
      </FillMe>
    ) : null;
  }
}

OnboardingComplete.defaultProps = {
  error: false,
  info: false,
  success: true
};

export default OnboardingComplete;
