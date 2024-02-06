import React, { useState } from "react";

const Admin = ({ onAdd, onDelete, onDeleteU, products, users }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [openListP, setopenListP] = useState(false);
  const [openListU, setopenListU] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, price);
    const item = {
      id: Date.now(),
      Pname: name,
      Pprice: price,
    };
    onAdd(item);
    setName("");
    setPrice("");
  };
  return (
    <div>
      <div className="flex gap-4 text-center items-center justify-center my-4">
        <h1 className="text-center font-bold">Add Product</h1>
        {openForm ? (
          <button onClick={() => setOpenForm((openForm) => !openForm)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
        ) : (
          <button onClick={() => setOpenForm((openForm) => !openForm)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </button>
        )}
      </div>
      {openForm ? (
        <form className="w-[20%] mx-auto" onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Product Name..."
            className="p-2 w-full bg-slate-100 rounded-xl my-2"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Product Price..."
            className="p-2 w-full bg-slate-100 rounded-xl"
          />
          <button
            type="submit"
            className="p-2 w-full bg-green-400 rounded-xl text-center my-2 text-white font-bold"
          >
            Add
          </button>
        </form>
      ) : null}
      <div className="flex gap-4 text-center items-center justify-center my-4">
        <h1 className="text-center font-bold">List Product</h1>
        {openListP ? (
          <button onClick={() => setopenListP((openListP) => !openListP)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
        ) : (
          <button onClick={() => setopenListP((openListP) => !openListP)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </button>
        )}
      </div>
      {openListP ? (
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
          {products.map((p) => (
            <Product key={p.id} p={p} onDelete={onDelete} />
          ))}
        </div>
      ) : null}
      <div className="flex gap-4 text-center items-center justify-center my-4">
        <h1 className="text-center font-bold">List Users</h1>
        {openListU ? (
          <button onClick={() => setopenListU((openListU) => !openListU)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
        ) : (
          <button onClick={() => setopenListU((openListU) => !openListU)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </button>
        )}
      </div>
      {openListU ? (
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
          {users.map((user) => (
            <Users key={user.id} user={user} onDeleteU={onDeleteU} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Admin;
export const Product = ({ p, onDelete }) => {
  return (
    <div className="flex-col text-center w-[90%] mx-auto h-max p-4 border-2 rounded-xl mb-2">
      <h1 className="font-bold mt-4">{p.Pname}</h1>
      <p className="text-slate-400 my-2">price :${p.Pprice}</p>
      <div className="flex items-center justify-center p-2 border-t ">
        <button
          onClick={() => onDelete(p.id)}
          className="w-full py-2 bg-red-600 font-bold text-white rounded-lg"
        >
          Delete Product
        </button>
      </div>
    </div>
  );
};
export const Users = ({ user, onDeleteU }) => {
  return (
    <div className="flex-col text-center w-[90%] mx-auto h-max p-4 border-2 rounded-xl mb-2">
      <h1 className="font-bold mt-4">{user.name}</h1>
      <p className="text-slate-400 my-2">{user.id}</p>
      <div className="flex items-center justify-center p-2 border-t ">
        <button
          onClick={() => onDeleteU(user.id)}
          className="w-full py-2 bg-red-600 font-bold text-white rounded-lg"
        >
          Delete Users
        </button>
      </div>
    </div>
  );
};
