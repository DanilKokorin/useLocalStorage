const MyApp = () => {
  const [name, setName] = useLocalStorage('name', 'John');

  return <input value={name} onChange={e => setName(e.target.value)} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyApp />
);
