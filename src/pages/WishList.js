import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getListById, deleteListById } from '../api/lists';
import DeleteButton from '../components/DeleteButton';

const WishList = () => {
  const { listId } = useParams();
  const [list, setList] = useState(null);
  const history = useHistory();

  useEffect(async () => {
    const newList = await getListById(listId);
    setList(newList);
  }, []);

  if (!list) {
    return <div>Loading...</div>;
  }

  const handleDelete = async () => {
    await deleteListById(listId);
    history.push('/');
  };

  return (
    <div>
      <Link to="/">Back</Link> {list.title}
      <ul>
        {list.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </div>
  );
};

export default WishList;
