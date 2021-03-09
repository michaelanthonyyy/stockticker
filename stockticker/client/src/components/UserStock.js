import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/FirebaseContext";
import API from "../utils/API";
import Graph from "./Graph";

const UserStock = () => {
  const { currentUser } = useAuth();
  const [userState, setUserState] = useState(currentUser);
  const [stockState, setStockState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(userState);
    if (loading) {
      API.getUserByEmail(userState.email).then((dbModel) => {
        console.log(dbModel.data.stocks);
        setStockState(dbModel.data.stocks);
        setLoading(false);
      });
    }
  });

  return (
    <div className="col col-sm-12">
      <h4>Saved Stocks Container</h4>
      <ul>
        {stockState.map((stock) => (
          <li>
            <Graph height={200} width={300} ticker={stock} />
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
