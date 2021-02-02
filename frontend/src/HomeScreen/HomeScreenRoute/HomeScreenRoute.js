import React from "react";
import ReactPageScroller from "react-page-scroller";
import Design from "../Design/Design";
import EcoFriendly from "../EcoFriendly/EcoFriendly";
import Commitment from "../HomeScreenCommitment/Commitment";
import ProductGallery from "../ProductGallery/ProductGallery";
import Products from "../Products/Products";

export default class FullPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { currentPage: null };
//   }

//   handlePageChange = number => {
//     this.setState({ currentPage: number });
//   };

//   handleBeforePageChange = number => {
//     console.log(number);
//   };

//   getPagesNumbers = () => {
//     const pageNumbers = [];

//     for (let i = 1; i <= 5; i++) {
//       pageNumbers.push(
//         <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
//           {i}
//         </Pager.Item>,
//       );
//     }

//     return [...pageNumbers];
//   };

  render() {
    // const pagesNumbers = this.getPagesNumbers();

    return (
      <React.Fragment>
        <ReactPageScroller>
            <Products/>
            <EcoFriendly/>
            <Design/>
            <Commitment/>
            <ProductGallery/>
        </ReactPageScroller>
        {/* <Pager className="pagination-additional-class" bsSize="large"> 
          {pagesNumbers}
        </Pager>*/}
      </React.Fragment>
    );
  }
}