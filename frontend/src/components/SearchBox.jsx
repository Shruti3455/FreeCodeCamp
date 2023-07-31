import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => e.target.value}
        //value={keyword}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2 mx-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
