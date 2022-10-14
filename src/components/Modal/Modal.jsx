import React, {Component} from 'react';
import { Overlay, ModalImg } from '../Modal/Modal.styled';

export class Modal extends Component {



  render() {
   return (
     <Overlay onClick={this.props.onCloseModal}>
       <ModalImg>
         <img
           src={this.props.image.largeImageURL}
           alt={this.props.image.tags}
         />
       </ModalImg>
     </Overlay>
   );
}
}


