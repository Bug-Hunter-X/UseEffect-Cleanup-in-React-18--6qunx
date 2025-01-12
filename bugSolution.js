```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Correct cleanup function
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```