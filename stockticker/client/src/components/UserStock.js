import React, { useEffect, useState } from "react";
import { useAuth } from "../context/FirebaseContext";
import API from "../utils/API";
import Graph from "./Graph";

const UserStock = () => {
  const { currentUser } = useAuth();
  const [userState, setUserState] = useState(currentUser);
  const [stockState, setStockState] = useState([]);
  const [userLogin, setUserLogin] = useState(true);

  useEffect(() => {
    console.log(userState);
    if (userLogin) {
      API.getUserByEmail(userState.email).then((dbModel) => {
        console.log(dbModel.data.stocks);
        setStockState(dbModel.data.stocks);
        setUserLogin(false);
      });
    }
  });

  return (
    <div className="col col-sm-12">
      <h4>Saved Stocks Container</h4>
      <ul>
        {stockState.map((stock) => (
          <li>
            <Graph ticker={stock} />
            <form>
            <div className="form-group">
            <input
              type="text"
              placeholder="Add Comment"
              className="form-control"
              id="comment"
            />
            </div>
            <button type="submit" className="btn btn-primary">
            Save
          </button>
            </form>
          </li>
          
        ))}
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
