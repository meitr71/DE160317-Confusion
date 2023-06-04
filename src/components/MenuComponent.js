import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

function RenderMenuItem ({dish, onClick}) {
    return (
        <Card
            onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-3"  key={dish.id}>
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}



//   class Menu extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             selectedDish: null
//         }
//     }

//     onDishSelect(dish) {
//         this.setState({ selectedDish: dish});
//     }

//     renderDish(dish) {
//         if (dish != null)
//             return(
//                 <Card>
//                     <CardImg top src={dish.image} alt={dish.name} />
//                     <CardBody>
//                       <CardTitle>{dish.name}</CardTitle>
//                       <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             );
//         else
//             return(
//                 <div></div>
//             );
//     }

    

//     render() {
//         const menu = this.props.dishes.map((dish) => {
//             return (
//               <div  className="col-12 col-md-3">

//                 <Card key={dish.id}
//  		        onClick={() => this.props.onClick(dish.id)}>
                        
//                   <CardImg width="100%" src={dish.image} alt={dish.name} />
//                   <CardImgOverlay>
//                       <CardTitle>{dish.name}</CardTitle>
//                   </CardImgOverlay>
//                 </Card>
//               </div>
//             );
//         });

//         return (
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
//                 <DishDetail selecteddish = {this.state.selectedDish} />
//             </div>
//         );
//     }
// }



export default Menu;