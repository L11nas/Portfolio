import React, { useState } from 'react';

import WorksItemModal from './WorksItemModal';
import { useDarkMode } from '../../ThemeContext';

const WorkItems = ({ item }) => {
  const { darkMode } = useDarkMode();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div className='work__card' key={item.id}>
        <img src={item.image} alt='' className='work__img' />
        <h3 className='work__title'>{item.title}</h3>
        <a href='#' className='work__button' onClick={openModal}>
          Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
        <WorksItemModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          demoContent={[
            'public/work1.jpg',
            'public/work2.jpg',
            'public/work3.jpg',
          ]}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};
export default WorkItems;
