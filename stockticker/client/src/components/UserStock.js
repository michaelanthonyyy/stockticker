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
        setStockState(dbModel.data.stocks);
        setCommentState(dbModel.data.comments);

        setLoading(false);
      });
    }
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    var commentId = e.currentTarget.getAttribute("dataId");
    API.updateCommentById(commentId, {$set: {content: "hello"} })
      .then(dbModel => {
        console.log(dbModel);
      });
  }

  return (
    <div className="col col-sm-12">
      <h4>Saved Stocks Container</h4>
      <ul>
        {stockState.map((stock) => {
          var dataId = 0;
          var comment = "";
          for (let i=0; i<stockState.length; i++) {
            if (commentState[i]) {if (commentState[i].ticker === stock) {
              dataId = commentState[i]._id;
              comment = commentState[i].content;
              console.log(comment);
            }}
          }
          return (
          <li>
            <Graph ticker={stock} />
            <form dataId={dataId} onSubmit={handleFormSubmit}>
            <div className="form-group">
            <textarea
              type="text"
              placeholder="Add Comment"
              className="form-control"
              id={dataId}>{comment}</textarea>
              {comment}
            </div>
            <button dataId={dataId} type="submit" className="btn btn-primary">
            Save
          </button>
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
