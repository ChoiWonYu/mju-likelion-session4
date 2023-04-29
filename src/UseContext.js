import React from "react";

const UseContext = () => {
  return (
    <div>
      <FirstComponent content="Who needs me?" />
    </div>
  );
};

function FirstComponent({ content }) {
  return (
    <div>
      <h3>I am the first component</h3>
      <SecondComponent content={content} />
    </div>
  );
}

function SecondComponent({ content }) {
  return (
    <div>
      <h3>I am the second component</h3>
      <ThirdComponent content={content} />
    </div>
  );
}

function ThirdComponent({ content }) {
  return (
    <div>
      <h3>I am the third component</h3>
      <ComponentNeedingProps content={content} />
    </div>
  );
}

function ComponentNeedingProps({ content }) {
  return <h3>{content}</h3>;
}

export default UseContext;
