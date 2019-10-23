export const errorHandler = (
  cb,
  message = "Something went wrong with your request, please try again"
) => () => {
  cb();
  alert(message);
};

export const scrollToBottom = () =>
  window.scrollTo(0, document.body.scrollHeight);

export const once = cb => {
  let called = false;
  let result;

  return (...args) => {
    if (called) return result;

    called = true;
    result = cb(...args);
    return result;
  };
};
