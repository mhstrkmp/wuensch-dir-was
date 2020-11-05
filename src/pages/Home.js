import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getLists } from '../api/lists';
import FloatingActionButton from '../components/FloatingActionButton';
import addPath from '../assets/add.svg';
import WishListForm from '../components/Form';

const Header = styled.header`
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
`;

const Home = () => {
  const [lists, setLists] = useState(null);

  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, []);

  return (
    <div>
      <Header>
        <h1>Wünsch dir was</h1>
      </Header>
      <main>
        <List>
          {lists?.map((list) => (
            <Link key={list.id} to={`/${list.id}`}>
              <li>{list.title}</li>
            </Link>
          ))}
        </List>
        <WishListForm />
        <Link to="/add">
          <FloatingActionButton>
            <img src={addPath} alt="Link to add page" />
          </FloatingActionButton>
        </Link>
      </main>
    </div>
  );
};

export default Home;
