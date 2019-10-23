import { useState } from "react";

export const useInput = initialState => {
  const [value, setValue] = useState(initialState);

  const handler = event => setValue(event.target.value);

  return [value, handler];
};
