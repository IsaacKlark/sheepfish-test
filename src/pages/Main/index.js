import Preloader from "../../components/Preloader";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/products";
import TableOfProducts from "../../components/TableOfProducts";
import { Header, TextFieldStyled } from "./styles";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NewProduct from "../../components/NewProduct";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const debounce = (fn, interval) => {
    let timer;

    return function debounced() {
      clearTimeout(timer);
      let args = arguments;
      timer = setTimeout(function callOriginalFn() {
        fn(...args);
      }, interval);
    };
  };

  const changeSearch = (value) => {
    setSearch(value);
  };

  const debounceWorking = useCallback(debounce(changeSearch, 500), []);

  const searchInput = (value) => {
    setSearchValue(value);
    debounceWorking(value);
  };


  useEffect(() => {
    axios.get(`https://dummyjson.com/products${search ? `/search?q=${search}` : ""}`).then((res) => {
      dispatch(setProducts(res.data.products))
    }).catch(() => {
      toast.error('Something went wrong :( Please, try again!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }).finally(() => {
      setLoading(false);
    })
  }, [search]);

  return <>
    <Preloader display={loading} />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />

    <ToastContainer />
    <Header>Products</Header>

    <TextFieldStyled
      label="Search"
      value={searchValue}
      onChange={(e) => {
        searchInput(e.target.value);
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    <TableOfProducts setLoading={setLoading} />
    <NewProduct setLoading={setLoading}/>
  </>
}

export default Main;