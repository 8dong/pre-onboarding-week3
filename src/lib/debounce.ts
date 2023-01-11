const debounce = () => {
  let timerId: ReturnType<typeof setTimeout> | null;

  return (callback: Function, delay: number) => {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback();
      timerId = null;
    }, delay);
  };
};

export default debounce;
