import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

const Intro = () => {
  // 쿼리스트링값을 가져오는 훅함수
  const [searchParams] = useSearchParams()
  const job = searchParams.get("title");
  
  // 동적 파라미터를 가져오는 훅함수
  console.log(useParams())
  const { title } = useParams()
   
  return (
    <div>
      {/* <p>{job}님 환영합니다!</p> */}
      <p>{title}님 환영합니다!</p>
      {/* <Link to={"/"}>메인 페이지로 이동</Link> */}
    </div>
  );
};

export default Intro;