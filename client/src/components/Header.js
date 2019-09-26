import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

//Components
import { Icon } from "semantic-ui-react";

//Styling
import { medium, large } from "../globals/styles";
import { flexBoxMixin, RowContainer } from "../globals/components";

//Styled Components
export const Banner = styled.header.attrs(props => ({
  direction: props.direction || "row",
  justify: props.justify || "space-between",
  align: props.align || "center",
  size: props.size || "1.5em"
}))`
  overflow: visible !important;
  overflow-x: hidden;
  color: white;
  padding: ${props => props.size};

  ${props => flexBoxMixin(props.direction, props.justify, props.align)};

  background-image: url("http://www.bara-art.com/wp-content/uploads/2016/07/building_roof.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  //desktop view
  @media (min-width: 1190px) {
  }

  //tablet view
  @media (min-width: 768px) {
    background-position: 0% 30%;
  }

  //mobile view
  @media (max-width: 500px) {
    background-position: 0% 45%;
    .search {
      width: 600px;
      margin-left: 19px;
    }
    .sc-bZQynM.fIEYMI {
      display: none;
    }
  }
`;

const Title = styled.h1`
  font-size: ${props => props.size || large};
  margin: 0px 20px 0px 0px;
`;

const Header = ({
  title = "Prisoner Skills",
  searchBar,
  dropDown,
  subtitle = "",
  backButton,
  history,
  direction,
  justify,
  align,
  size
}) => (
  <Banner direction={direction} justify={justify} align={align} size={size}>
    <RowContainer align="center">
      {backButton && (
        <Icon
          name="caret left"
          onClick={() => history.goBack()}
          style={{ marginRight: 10 }}
        />
      )}
      {title && (
        <>
          <Title size={size}>
            {title.split("\n").map((i, key) => {
              return (
                <div key={key} style={{ textAlign: "center" }}>
                  {i}
                </div>
              );
            })}
          </Title>
          {searchBar}
          {dropDown}
        </>
      )}
    </RowContainer>
    {subtitle}
  </Banner>
);
export default withRouter(Header);
