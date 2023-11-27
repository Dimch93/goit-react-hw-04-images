import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Item, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevModal => !prevModal);
  };

  return (
    <>
      <Item>
        <Img src={image.webformatURL} alt={image.tags} onClick={toggleModal} />
        {showModal && (
          <Modal
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClose={toggleModal}
          />
        )}
      </Item>
    </>
  );
};
