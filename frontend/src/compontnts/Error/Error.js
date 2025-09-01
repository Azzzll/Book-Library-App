import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/ReactToastify.css';
import {
  clearError,
  selectedErrorMessage,
} from '../../redux/slices/errorSlice';

const Error = () => {
  const errorMessage = useSelector(selectedErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage);
      dispatch(clearError());
    }
  }, [errorMessage, dispatch]);

  return (
    <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
  );
};

export default Error;
