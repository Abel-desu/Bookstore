/*eslint-disable*/
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusAction } from '../Redux/categories/Categories';


function Catagories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.category);

  const checkStatus = () => {
    dispatch(statusAction());
  };

  return (
    <div>
    <button type="submit" onClick={checkStatus}>Check status</button>
    <h2>{status}</h2>
    </div>
  );
}

export default Catagories;