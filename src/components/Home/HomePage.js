import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";

import Popup from "../UI/Popup";
import Header from "../UI/Header";

function HomePage({ logoutHandler }) {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    if (res) setTodos(res.data);
  };

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const [selectedTodo, setSelectedTodo] = useState();

  useEffect(() => {
    getData();

    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(todos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(todos.length / itemsPerPage));
  }, [todos, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % todos.length;
    setItemOffset(newOffset);
  };

  const handleTodoClick = async (id) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    if (res) {
      setSelectedTodo(res.data);
    }
  };

  return (
    <div>
      <Header onLogout={logoutHandler} />

      <div className="container">
        {selectedTodo && (
          <Popup
            showPopup={!!selectedTodo}
            setShowPopup={setSelectedTodo}
            todo={selectedTodo}
          />
        )}

        <Table striped bordered hover className="my-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Is Completed</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((todo) => (
              <tr
                key={todo.id}
                className="cursor-pointer"
                onClick={() => handleTodoClick(todo.id)}
              >
                <td>{todo.id}</td>
                <td>{todo.userId}</td>
                <td>{todo.title}</td>
                <td>{todo.completed.toString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Row>
        <div className="mx-auto" style={{ width: "100%"}}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
        </div>
        </Row>
        
        
      </div>
    </div>
  );
}

export default HomePage;
