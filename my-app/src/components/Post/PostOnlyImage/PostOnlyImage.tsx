import React, { useContext, FC} from 'react';
import { ThemeContext } from 'src/App';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_POPUP } from 'src/actions/actions';
import { IPost } from '../Post';

const PostOnlyImage = () => {
    const posts: IPost[] = useSelector(({posts}) => posts);
    const {popupId} = useContext(ThemeContext);

  return (
    <>
        {posts.map(({title, text, date, image, id}) => ( 
            (popupId === +id) ? <PostImage key={id} title={title} image={image} id={popupId}/> : ''
        ))}
    </>
  )
}

export const PostImage:FC<IPost> = ({id, image}) => {
    const dispatch = useDispatch();

    return (
        <div className='post'>
            <div className='post__content post__single__gap 2'>
                <div className='post__image' onClick={() => dispatch(TOGGLE_POPUP({isOpen: 'open', id: id, image: image}))}>
                    <img src={image} alt="image" />
                </div>
                <div className='post__footer'>
                    <button onClick={() => dispatch(TOGGLE_POPUP({isOpen: 'open', id: id - 1, image: image}))}>left</button>
                    <button onClick={() => dispatch(TOGGLE_POPUP({isOpen: 'open', id: id + 1, image: image}))}>right</button>
                </div>
            </div>

        </div> 
    )
}

export default PostOnlyImage