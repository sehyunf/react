import React from 'react';

const User = ({user}) => {
  const {name, phone} = user
  const city = user.address.city
  const company = user.company.name

  return (
    <ul>
      <li>이름 : {name} </li>
      <li>전화번호 : {phone}</li>
      <li>회사이름 : {company}</li>
      <li>도시이름 : {city}</li>
    </ul>
  );
};

export default User;