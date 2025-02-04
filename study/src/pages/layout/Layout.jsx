import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>헤더</header>
      <main>
        <Outlet>메인 컨텐츠
        </Outlet></main>
      <footer>푸터</footer>
    </div>
  );
};

export default Layout;