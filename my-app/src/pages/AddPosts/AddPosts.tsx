import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useNavigate } from "react-router";

import ImageUploading from "react-images-uploading";
import { CREATE_POST } from "src/actions/actions";

import Input from "src/components/Input";
import PageTemplate from "src/components/PageTemlate/PageTemplate";
import Textarea from "src/components/Textarea";

import "./style.css";

const AddPosts = () => {
  const dispatch: ThunkDispatch<any, {}, AnyAction> = useDispatch();
  const navigate = useNavigate();

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

  const deletePostData = () => {
    setTitle("");
    setLesson("");
    setTextDescription("");
    setText("");
    setImages([]);
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

        <Textarea
          label="Description"
          placeholder="Add your description text"
          value={textDescription}
          cols={30}
          rows={4}
          onChange={(e) => setTextDescription(e)}
        />
        <Textarea
          label="Text"
          placeholder="Add your text"
          value={text}
          cols={30}
          rows={10}
          onChange={(e) => setText(e)}
        />

        <div className="addPosts__footer">
          <button
            className="addPosts__deleteBtn addPostsBtn"
            onClick={() => deletePostData()}
          >
            Delete post
          </button>
          <div className="addPosts__footerRight">
            <button
              className="addPosts__cancelBtn addPostsBtn"
              onClick={() => navigate("/")}
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
