function App() {
  // const element = <h4>Hello</h4>;
  return (
    /* If you were to use vanilla JS, you will be using imperative code.
    For example:
    const para = document.createElement('p');
    para.textContent = 'This is also visible';
    document.getElementById('root').append(para);
    */

    // This is a declarative way used by React
    <div>
      <h2>Let's get started!</h2>
      <p>This should be visible!</p>
    </div>
  );
  // return element;
}

export default App;
