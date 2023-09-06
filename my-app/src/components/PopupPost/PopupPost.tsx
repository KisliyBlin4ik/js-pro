import React, { FC, ReactNode, useContext } from 'react'
import { ThemeContext } from 'src/App';
import Post from '../Post/Post'
import './style.css'
import { useDispatch } from 'react-redux';
import { TOGGLE_POPUP } from 'src/actions/actions';
import { StyledPopupContent } from 'src/styled';
import { useSelector } from 'react-redux';

interface IPopupPost {
    children: ReactNode;
}

const PopupPost: FC<IPopupPost> = ({children}) => {
    // const {openPopup, setOpenPopup} = useContext(ThemeContext);
    const theme = useSelector(({theme}) => theme);
    const dispatch = useDispatch();
    const {popupId} = useContext(ThemeContext);



  return (
    <div id='popup' className='popup'>
        <div className="popup__body">
            <StyledPopupContent className="popup__content" theme={theme}>
                <a className='popup__close' onClick={() => dispatch(TOGGLE_POPUP({isOpen: 'close', id: null}))}>X</a>
                {children}
                {/* <Post /> */}
            </StyledPopupContent>
        </div>
    </div>
  )
}

export default PopupPost