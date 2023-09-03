import { useSelector } from "react-redux/es/hooks/useSelector";
import { Table, Th, Td, Image, DeleteButton } from "./styles";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/products";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const TableOfProducts = ({ setLoading }) => {
  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();

  const sort = useCallback((name) => {
    const copyProducts = [...products];
    dispatch(setProducts(copyProducts.sort((a, b) => {
      if (!isNaN(+a[name])) {
        return a[name] - b[name];
      };

      var nameA = a[name].toUpperCase();
      var nameB = b[name].toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })))
  }, [products]);

  const deleteProduct = useCallback((e, id) => {
    e.preventDefault();

    setLoading(true);
    axios.delete(`https://dummyjson.com/products/${id}`).then(() => {
      toast.success('Product has been deleted successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const copyProducts = [...products];
      dispatch(setProducts(copyProducts.filter(el => el.id !== id)));
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
  }, [products])

  return <Table>
    <thead>
      <tr>
        <Th onClick={() => sort("id")} title="sort by id">ID</Th>
        <Th onClick={() => sort("title")} title="sort by name">Name</Th>
        <Th onClick={() => sort("description")} title="sort by description">Description</Th>
        <Th onClick={() => sort("price")} title="sort by price">Price, $</Th>
        <Th>Photo</Th>
        <Th onClick={() => sort("rating")} title="sort by rating">Rating</Th>
        <Th onClick={() => sort("stock")} title="sort by stock">Stock</Th>
        <Th onClick={() => sort("category")} title="sort by category">Category</Th>
        <Th>Remove</Th>
      </tr>
    </thead>
    <tbody>
      {
        products.map(el => (<tr key={el.id}>
          <Td><Link to={`/product/${el.id}`} >{el.id} </Link></Td>
          <Td><Link to={`/product/${el.id}`} >{el?.title} </Link></Td>
          <Td><Link to={`/product/${el.id}`} >{el?.description} </Link></Td>
          <Td><Link to={`/product/${el.id}`} >{el?.price} </Link></Td>
          <Td><Link to={`/product/${el.id}`} >{el.images && <Image src={el.images[0]} alt={el.title} />} </Link></Td>
          <Td><Link to={`/product/${el.id}`} >{el.rating} </Link></Td>
          <Td><Link to={`/product/${el.id}`} >{el.stock} </Link></Td>
          <Td><Link to={`/product/${el.id}`} >{el.category} </Link></Td>
          <Td onClick={(e) => deleteProduct(e, el.id)}><DeleteIcon /></Td>
        </tr>))
      }

    </tbody>
  </Table>
}

export default TableOfProducts;