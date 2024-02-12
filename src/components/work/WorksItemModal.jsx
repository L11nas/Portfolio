import React from 'react';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { useDarkMode } from '../../ThemeContext';
import './work.css';

const WorksItemModal = ({ isOpen, onRequestClose, demoContent }) => {
  const { darkMode } = useDarkMode();

  return (
    <Dialog
      open={isOpen}
      onClose={onRequestClose}
      fullWidth
      maxWidth='md'
      className={darkMode ? 'dark-mode' : ''} // Add a class to style the dialog if needed
      sx={{
        '.MuiDialog-paper': {
          backgroundColor: darkMode ? '#333333' : '#fefbea', // Set your desired background color
        },
      }}
    >
      <DialogContent>
        <ImageList sx={{ width: '100%', height: '100%' }}>
          {demoContent.map((item, index) => (
            <ImageListItem key={index} className='custom-image-item'>
              <img
                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item}?w=248&fit=crop&auto=format`}
                alt={`Demo Image ${index}`}
                loading='lazy'
              />
              <ImageListItemBar
                title={`Demo Image ${index}`}
                subtitle={<span>by: Your Author</span>}
                position='below'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </DialogContent>
      <DialogActions>
        <Button onClick={onRequestClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default WorksItemModal;
