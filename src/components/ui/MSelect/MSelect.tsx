import React, { useState, useEffect, useRef } from 'react';

import MSelectView from './MSelect.view';

interface Props<Placeholder extends string, OptionValue extends number | 'all', OptionLabel extends string> {
  className?: string;
  placeholder: Placeholder;
  options: { value: OptionValue, label: OptionLabel }[];
  withActiveBorder?: boolean;
  selectClickHandler?: () => void;
  selectOptionHandler?: (optionValue: OptionValue) => void;
}

const MSelect = <Placeholder extends string, OptionValue extends number | 'all', OptionLabel extends string>(props: React.PropsWithChildren<Props<Placeholder, OptionValue, OptionLabel>>) => {
  const [ placeholderState, setPlaceholderState ] = useState<Placeholder | OptionLabel>(props.placeholder);
  const [ optionsState, setOptionsState ] = useState<{ value: OptionValue, label: OptionLabel }[]>([]);

  const selectRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (
        selectRef.current &&
        event.target !== selectRef.current &&
        !selectRef.current.contains(event.target as HTMLElement)
      ) {
        setOptionsState(() => []);
      }
    }

    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  /**
  * Handler for clicking the select button
  * @returns void
  */
  const onClickSelect = (): void => {
    props.selectClickHandler && props.selectClickHandler();

    return setOptionsState((prev: { value: OptionValue, label: OptionLabel }[]) => {
      if (prev.length === 0) {
        return [ ...props.options ];
      }
  
      return [];
    });
  }

  /**
  * Handler for selecting a select option
  * @param index The index of the selected option
  * @returns void
  */
  const onSelectOption = (index: number): void => {
    setPlaceholderState(() => props.options[index].label);

    props.selectOptionHandler && props.selectOptionHandler(props.options[index].value);
  };

  return (
    <MSelectView
      innerRef={selectRef}
      className={props.className}
      placeholder={placeholderState}
      options={optionsState}
      onClickSelect={onClickSelect}
      onSelectOption={onSelectOption}
      withActiveBorder={props.withActiveBorder}
    >{props.children}</MSelectView>
  );
};

MSelect.displayName = 'MSelect';
MSelect.defaultProps = {};

export default MSelect;
