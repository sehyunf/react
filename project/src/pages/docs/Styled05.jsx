import React from 'react';
import S from './style';

const Styled05 = () => {
  console.log(S)
  
  return (
    <>
      <span>아이디</span><S.Input width={"100%"} height={"50px"} type='text'/>
      <span>비밀번호</span><S.Input width={"200px"} height={"20px"} type='password'/>
      
    </>
  );
};

export default Styled05;