import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import ImageUploading from "react-images-uploading";
import { CREATE_POST } from "src/actions/actions";

import Input from "src/components/Input";
import PageTemplate from "src/components/PageTemlate/PageTemplate";

import "./style.css";

const AddPosts = () => {
  const dispatch: ThunkDispatch<any, {}, AnyAction> = useDispatch();

  const [title, setTitle] = useState("");
  const [lesson_num, setLesson] = useState("");
  const [textDescription, setTextDescription] = useState("");
  const [text, setText] = useState("");

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  console.log(images);

  const onChange = (imageList: any, addUpdateIndex: any) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <PageTemplate title="addPosts">
      <div className="addPosts__container">
        <Input
          type="text"
          placeholder="Add title"
          value={title}
          label="Title"
          onChange={setTitle}
        />
        <div className="addPosts__input">
          <Input
            type="text"
            placeholder="Lesson number"
            value={lesson_num}
            label="Lesson number"
            onChange={setLesson}
          />
        </div>

        <div className="addPosts__app">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                <button onClick={onImageRemoveAll}>Remove all images</button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image["data_url"]} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)}>
                        Update
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>

        <textarea
          className="addPosts__textArea"
          placeholder="Add your text"
          value={textDescription}
          name=""
          id=""
          cols={30}
          rows={4}
          onChange={(e) => setTextDescription(e.currentTarget.value)}
        ></textarea>
        <textarea
          className="addPosts__textArea"
          placeholder="Add your text"
          value={text}
          name=""
          id=""
          cols={30}
          rows={10}
          onChange={(e) => setText(e.currentTarget.value)}
        ></textarea>
        <div className="addPosts__footer">
          <button
            className="addPosts__deleteBtn addPostsBtn"
            // onClick={() => dispatch(SIGN_IN(navigate, email, password))}
          >
            Delete post
          </button>
          <div className="addPosts__footerRight">
            <button
              className="addPosts__cancelBtn addPostsBtn"
              // onClick={() => dispatch(SIGN_IN(navigate, email, password))}
            >
              Cancel
            </button>
            <button
              className="addPosts__addBtn addPostsBtn"
              onClick={() =>
                dispatch(
                  CREATE_POST({
                    title,
                    lesson_num: +lesson_num,
                    image: images,
                    description: textDescription,
                    text,
                  })
                )
              }
            >
              Add post
            </button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default AddPosts;
