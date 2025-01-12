# React 18 useEffect Cleanup Bug

This repository demonstrates a common error related to cleanup functions within the `useEffect` hook in React 18 and later versions.  Failing to properly clean up resources (like intervals or timeouts) can lead to memory leaks and unexpected behavior.

The `bug.js` file contains the erroneous code, while `bugSolution.js` shows the corrected implementation.