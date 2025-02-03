import React from 'react';
import { ColorConsumer } from './ColorContext';

const ChildComponent = () => {
  return (
    <div>
      <ColorConsumer>
        { (context) => (
          <>
            <div>
              <p style={{color : context.state.color, fontSize : context.state.fontSize}}>색상이 나오는 글자</p>
              <button onClick={() => {context.action.setColor("red")}}>색상 변경</button>
              <button onClick={() => {context.action.setFontSize("5rem")}}>커지게 하는 버튼</button>
            </div>
          </>
        )}
      </ColorConsumer>

    </div>
  );
};

export default ChildComponent;