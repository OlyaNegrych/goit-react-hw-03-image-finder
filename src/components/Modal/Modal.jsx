import React, {Component} from 'react';
import { Overlay, ModalImg } from '../Modal/Modal.styled';

export class Modal extends Component {

  handleCloseModal = (e) => {
    if (e.target.nodeName === 'IMG') {
      return
    }
    this.props.onCloseModal();
}

  render() {
   return (
     <Overlay onClick={this.handleCloseModal}>
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


