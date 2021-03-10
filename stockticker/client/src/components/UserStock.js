import React, { useEffect, useState } from "react";
import { useAuth } from "../context/FirebaseContext";
import API from "../utils/API";
import Graph from "./Graph";

const UserStock = () => {
  const { currentUser } = useAuth();
  const [userState, setUserState] = useState(currentUser);
  const [stockState, setStockState] = useState([]);

  const [commentState, setCommentState] = useState([]);
  const [userLogin, setUserLogin] = useState(true);
  const [textState, setTextState] = useState("");

  useEffect(() => {
    console.log(userState);
    if (userLogin) {
      API.getUserByEmail(userState.email).then((dbModel) => {
        console.log(dbModel);
        if (dbModel.data) {
          setStockState(dbModel.data.stocks);
          setCommentState(dbModel.data.comments);

          setUserLogin(false);
        }
      });
    }
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    var commentId = e.currentTarget.getAttribute("dataId");
    var textArea = e.target.children[0].children[0];
    API.updateCommentById(commentId, {
      $set: { content: textArea.value },
    }).then((dbModel) => {
      console.log(dbModel);
      setUserLogin(true);
    });
  }

  function handleDelete(e) {
    e.preventDefault();
    var commentId = e.currentTarget.getAttribute("dataId");
    var textArea = e.target.parentNode.children[0].children[0];

    textArea.value = "";
    API.updateCommentById(commentId, { $set: { content: "" } }).then(
      (dbModel) => {
        console.log(dbModel);

        setUserLogin(true);
      }
    );
  }

  // var comment="";
  function handleInputChange(e) {
    var commentIndex = e.target.getAttribute("index");
    console.log(commentIndex);
    console.log(e.target.value);
    var tempState = commentState;
    tempState[commentIndex].content = e.target.value;
    console.log(tempState[commentIndex].content);
    e.target.value = tempState[commentIndex].content;
    setCommentState([...commentState, tempState[commentIndex]]);
    console.log(commentState);
  }

  return (
    <>
      {stockState.map((stock) => {
        var dataId = 0;
        var indexId = 0;
        for (let i = 0; i < stockState.length; i++) {
          if (commentState[i]) {
            if (commentState[i].ticker === stock) {
              dataId = commentState[i]._id;
              indexId = i;
            }
          }
        }
        return (
          <div className="card userStock-ctn">
            <Graph ticker={stock} />
            <div className="card-body comment-ctn">
              <hr />
              <form dataId={dataId} onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <textarea
                    type="text"
                    placeholder="Add a comment"
                    className="form-control"
                    index={indexId}
                    value={
                      commentState[indexId] ? commentState[indexId].content : ""
                    }
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  dataId={dataId}
                  type="submit"
                  className="btn btn-primary"
                >
                  Save
                </button>
                <button
                  dataId={dataId}
                  onClick={handleDelete}
                  className="btn btn-danger"
                >
                  X
                </button>
              </form>
            </div>
          </div>
        );
      })}

      {/* <ul>
        <li>Saved Stock 1</li>
        <li>Saved Stock 2</li>
        <li>Saved Stock 3</li>
        <li>Saved Stock 4</li>
      </ul> */}
    </>
  );
};

export default UserStock;
