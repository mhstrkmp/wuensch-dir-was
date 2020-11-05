// eslint-disable-next-line
export async function getLists() {
  const response = await fetch('http://localhost:5000/lists');
  const lists = await response.json();
  return lists;
}

export async function getListById(id) {
  const response = await fetch(`http://localhost:5000/lists/${id}`);
  const list = await response.json();
  return list;
}

export async function deleteListById(id) {
  const response = await fetch(`http://localhost:5000/lists/${id}`, {
    method: 'DELETE',
  });
  const list = await response.json();
  return list;
}
