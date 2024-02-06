import React, { useState } from "react";
import "./components/Style.css";
import { Routes, Route } from "react-router-dom";
import LayOut from "./components/LayOut";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import { ShopContextProvider } from "./context/shopContext";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Register from "./pages/register/Register";
const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      Pname: "React & Redux",
      Pprice: 1000,
    },
    {
      id: 2,
      Pname: "JavaScript",
      Pprice: 2000,
    },
    {
      id: 3,
      Pname: "Php & Laravel",
      Pprice: 3000,
    },
    {
      id: 4,
      Pname: "TypeScript",
      Pprice: 4000,
    },
  ]);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "amir",
      pass: "0944",
    },
    {
      id: 2,
      name: "soheil",
      pass: "1234",
    },
    {
      id: 3,
      name: "arshia",
      pass: "12345",
    },
  ]);
  const [account, setAccount] = useState();
  const handleAdd = (item) => {
    setProducts((prevProducts) => [...prevProducts, item]);
  };
  const handleDelete = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };
  const handleAddUser = (item) => {
    setUsers((prevUsers) => [...prevUsers, item]);
  };
  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };
  const handleAddAcc = (item) => {
    setAccount({ item });
    console.log(account);
  };
  return (
    <div>
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<Shop products={products} />} />
            <Route path="/cart" element={<Cart products={products} />} />
            <Route
              path="/login"
              element={<Login users={users} onAcc={handleAddAcc} />}
            />
            <Route
              path="/register"
              element={<Register onAdd={handleAddUser} />}
            />
            <Route
              path="/admin"
              element={
                <Admin
                  users={users}
                  products={products}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  onDeleteU={handleDeleteUser}
                />
              }
            />
          </Route>
        </Routes>
      </ShopContextProvider>
    </div>
  );
};

export default App;
