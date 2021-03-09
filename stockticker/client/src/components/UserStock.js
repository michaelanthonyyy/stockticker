import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/FirebaseContext";
import API from "../utils/API";
import Graph from "./Graph";

const UserStock = () => {
  const { currentUser } = useAuth();
  const [userState, setUserState] = useState(currentUser);
  const [stockState, setStockState] = useState([]);
  const [commentState, setCommentState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(userState);
    if (loading) {
      API.getUserByEmail(userState.email)
        .then((dbModel) => {
        console.log(dbModel);
        if (dbModel.data) {
          setStockState(dbModel.data.stocks);
          setCommentState(dbModel.data.comments);
  
          setLoading(false);
        }

      });
    }
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    var commentId = e.currentTarget.getAttribute("dataId");
    var textArea = e.target.children[0].children[0];
    API.updateCommentById(commentId, {$set: {content: textArea.value} })
      .then(dbModel => {
        console.log(dbModel);
        setLoading(true);
      });
  }

  function handleDelete(e) {
    e.preventDefault();
    var commentId = e.currentTarget.getAttribute("dataId");
    var textArea = e.target.parentNode.children[0].children[0];
    
    textArea.value = "";
    API.updateCommentById(commentId, {$set: {content: ""} })
    .then(dbModel => {
      console.log(dbModel);

      setLoading(true);
    });
  }

  // function handleInputChange(e) {
  //   e.preventDefault();
  //   var commentIndex = e.currentTarget.getAttribute("id");
  //   console.log(commentIndex);
  //   console.log(e.target.value);
  //   var tempState = commentState;
  //   tempState[commentIndex] = e.currentTarget.value;
  //   setCommentState(tempState);
  // }

  return (
    <div className="col col-sm-12">
      <h4>Saved Stocks Container</h4>
      <ul>
        {stockState.map((stock) => {
          var dataId = 0;
          var comment = "";
          var indexId = 0;
          for (let i=0; i<stockState.length; i++) {
            if (commentState[i]) {if (commentState[i].ticker === stock) {
              dataId = commentState[i]._id;
              comment = commentState[i].content;
              indexId = i;
            }}
          }
          return (
          <li>
            <Graph ticker={stock} />
            <form dataId={dataId} onSubmit={handleFormSubmit}>
            <div className="form-group">
            <textarea
              type="text"
              placeholder="Add a comment"
              className="form-control"
              id={indexId} ng-init={comment} />
            </div>
            <button dataId={dataId} type="submit" className="btn btn-primary">
            Save
          </button>
          <button dataId={dataId} onClick={handleDelete} className="btn btn-warning">X</button>
            </form>
          </li>
          
        )})}
      </ul>

      {/* <ul>
        <li>Saved Stock 1</li>
        <li>Saved Stock 2</li>
        <li>Saved Stock 3</li>
        <li>Saved Stock 4</li>
      </ul> */}
    </div>
  );
};

export default UserStock;
