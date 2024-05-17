import React from 'react';
import Layout from './components/Layout';
import TodoContainer from './components/todo/TodoContainer';

const App = () => {
  return (
    <Layout>
      <TodoContainer />
    </Layout>
  );
};

export default App;
