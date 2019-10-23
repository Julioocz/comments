import React, {
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import classNames from "classnames";

const TextArea = ({ className, value, onChange, placeholder }, ref) => {
  const [height, setHeight] = useState("100%");
  const areaRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      const element = areaRef.current;
      element.focus();
      element.setSelectionRange(element.value.length, element.value.length); // Sets cursor to end of text area
    }
  }));

  useLayoutEffect(() => {
    if (!areaRef.current) return;

    setHeight(`${areaRef.current.scrollHeight}px`);

    return () => setHeight("100%");
  }, [value]);

  className = classNames(className, "focus:outline-none resize-none w-full overflow-y-hidden");

  return (
    <textarea
      ref={areaRef}
      style={{ height }}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  );
};

TextArea.propTypes = {};

export default React.forwardRef(TextArea);
