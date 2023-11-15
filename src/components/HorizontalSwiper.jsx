import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {ScrollMenu} from "react-horizontal-scrolling-menu";
import "./HorizontalSwiper.css";

let list = [
  { name: "item1" },
  { name: "item2" },
  { name: "item3" },
  { name: "item4" },
  { name: "item5" },
  { name: "item6" },
  { name: "item7" },
  { name: "item8" },
  { name: "item9" },
  { name: "item10" },
  { name: "item11" },
  { name: "item12" },
  { name: "item13" },
  { name: "item14" },
  { name: "item15" },
  { name: "item16" },
  { name: "item17" },
  { name: "item18" },
  { name: "item19" },
  { name: "item20" },
  { name: "item21" },
  { name: "item22" },
  { name: "item23" },
  { name: "item24" },
  { name: "item25" }
];
const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

const Menu = (list, selected) =>
  list.map((el) => {
    const { name } = el;
    return <MenuItem text={name} key={name} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const HSwiper = () => {
  const [state, setState] = useState({
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: list.length,
    scrollToSelected: false,
    selected: "item1",
    translate: 0,
    transition: 0.3,
    wheel: true,
  });

  const menu = Menu(list.slice(0, state.itemsCount), state.selected);
  const menuRef = useRef(null);

  const onFirstItemVisible = () => {
    console.log("first item is visible");
  };

  const onLastItemVisible = () => {
    console.log("last item is visible");

    const newItems = Array(5)
      .fill(1)
      .map((el, ind) => ({ name: `item${list.length + ind + 1}` }));
    list = list.concat(newItems);
    const updatedMenu = Menu(list, list.slice(-1)[0].name);
    setState((prevState) => ({
      ...prevState,
      itemsCount: list.length,
      selected: prevState.selected,
    }));
  };

  const onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    setState((prevState) => ({ ...prevState, translate }));
  };

  const onSelect = (key) => {
    console.log(`onSelect: ${key}`);
    setState((prevState) => ({ ...prevState, selected: key }));
  };

  useEffect(() => {
    const { alignCenter } = state;
    if (alignCenter && menuRef.current) {
      menuRef.current.setInitial();
    }
  }, [state.alignCenter]);

  return (
    <div className="HSwiper">
      <ScrollMenu
        alignCenter={state.alignCenter}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        clickWhenDrag={state.clickWhenDrag}
        data={menu}
        dragging={state.dragging}
        hideArrows={state.hideArrows}
        hideSingleArrow={state.hideSingleArrow}
        onFirstItemVisible={onFirstItemVisible}
        onLastItemVisible={onLastItemVisible}
        onSelect={onSelect}
        onUpdate={onUpdate}
        ref={menuRef}
        scrollToSelected={state.scrollToSelected}
        selected={state.selected}
        transition={+state.transition}
        translate={state.translate}
        wheel={state.wheel}
      />
    </div>
  );
};

export default HSwiper;
