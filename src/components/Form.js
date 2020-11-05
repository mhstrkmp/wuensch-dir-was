import { useState } from 'react';
import styled from 'styled-components/macro';

const Form = styled.form`
  /* Add styling here */
`;

const WishListForm = () => {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    alert(`A name was submitted: ${value}`);
    event.preventDefault();
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </Form>
    </>
  );
};

export default WishListForm;
