import React, { useEffect, useRef, useState } from 'react';
import { ArrowIcon } from '../assets/ArrowIcon';
import styles from '../styles.module.css';
import { DEFAULT_ITEMS_PER_RESOLUTION_CONFIG } from './constants';
import { SlideableProps } from './types';
import { useItemsPerDisplayCount } from './_hooks/useItemsPerDisplayCount';
import { useScroll } from './_hooks/useScroll';

const InfiniteSlider: React.FC<SlideableProps> = ({
  items,
  buttonsStyle,
  looped = false,
  // noButtons = false,
  // swipeable = false, TODO: implement swipeable
  width = '100%',
  height = 'auto',
  customButtonLeft,
  customButtonRight,
  placeholderElement,
  itemsMargin = 0,
  config = DEFAULT_ITEMS_PER_RESOLUTION_CONFIG,
}) => {
  const [list, setList] = useState<HTMLDivElement | null>(null);
  // const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = containerRef.current?.clientWidth ?? 0;
  const { itemsPerDisplay } = useItemsPerDisplayCount(config, containerWidth);
  const placeholdersCount = placeholderElement ? itemsPerDisplay - items.length : 0;
  const fullItemWidth = containerWidth / itemsPerDisplay;
  const itemWidth = fullItemWidth - itemsMargin;
  // const order = useOrder(list, itemsPerDisplay);
  const scroll = useScroll(itemsPerDisplay, list, looped ? 'infinite' : 'finite');

  useEffect(() => {
    if (listRef.current) {
      setList(listRef.current);
    }
  }, [listRef]);

  return (
    <div
      ref={containerRef}
      className={styles['container']}
      style={{ height, minHeight: height, width, maxWidth: width }}
    >
      <div className={styles['buttonContainer']}>
        {customButtonLeft ? (
          <span onClick={scroll.back} className={`navButton ${styles['emptyButton']}`} role="button">
            {customButtonLeft}
          </span>
        ) : (
          <button
            id="button-back"
            aria-label="Back"
            onClick={scroll.back}
            className={`navButton ${styles['emptyButton']} ${styles['button']}`}
            style={buttonsStyle}
          >
            <ArrowIcon />
          </button>
        )}
      </div>
      <div className={styles['scrollableContent']} ref={listRef}>
        <ul className={styles['list']}>
          {items.map((item, index) => (
            <li
              key={item.key}
              id={`${index}`}
              className={styles['listItem2']}
              style={{ minWidth: `${itemWidth}px`, width: `${itemWidth}px`, marginRight: `${itemsMargin}px` }}
            >
              {item}
            </li>
          ))}
          {placeholdersCount > 0 &&
            Array.from(Array(placeholdersCount).keys()).map(key => (
              <li key={key} className={styles['listItem']} style={{ marginRight: `${itemsMargin}px` }}>
                {placeholderElement}
              </li>
            ))}
        </ul>
      </div>
      <div className={styles['buttonContainer']}>
        {customButtonRight ? (
          <span onClick={scroll.forward} className={`navButton ${styles['emptyButton']}`}>
            {customButtonRight}
          </span>
        ) : (
          <button
            id="button-right"
            aria-label="Forward"
            onClick={scroll.forward}
            className={`navButton ${styles['emptyButton']} ${styles['button']}`}
            style={buttonsStyle}
          >
            <ArrowIcon />
          </button>
        )}
      </div>
    </div>
  );

  // function loopedItems(items: JSX.Element[]): JSX.Element[] {
  //   if (items.length < itemsPerDisplay * 2) {
  //     return loopedItems([...items, ...items]);
  //   }
  //   return items;
  // }
};

export const InfiniteSlide = React.memo(InfiniteSlider, (_prevProps, _nextProps) => true);
