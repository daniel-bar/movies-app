import React from 'react';

import MSvg from '../MSvg/MSvg';

import classes from './MSelect.module.scss';

interface Props<Placeholder extends string, OptionValue extends number | 'all', OptionLabel extends string> {
  innerRef?: React.RefObject<HTMLDivElement>;
  className?: string;
  placeholder: Placeholder | OptionLabel;
  options: { value: OptionValue, label: OptionLabel }[];
  withActiveBorder?: boolean;
  onClickSelect: () => void;
  onSelectOption: (index: number) => void;
}

const MSelectView = <Placeholder extends string, OptionValue extends number | 'all', OptionLabel extends string>(props: React.PropsWithChildren<Props<Placeholder, OptionValue, OptionLabel>>): JSX.Element => {
  const selectClasses: string = classes['container'] + (props.options.length > 0 && props.withActiveBorder ? ` ${classes['container--active']}` : '') + (props.className ? ` ${props.className}` : '');

  const optionsContainerRender: React.ReactElement | null = props.options.length > 0 ? (
    <div className={classes['optionsContainer']}>
      {props.options.map((optionItem: { value: OptionValue, label: OptionLabel }, index: number) => (
        <span
          key={optionItem.value}
          className={classes['optionsContainer__option']}
          onClick={() => props.onSelectOption(index)}
        >{optionItem.label}</span>
      ))}
    </div>
  ) : null;

  return (
    <div className={selectClasses} onClick={props.onClickSelect} ref={props.innerRef}>
      <span className={classes['container__placeholder']}>{props.placeholder}</span>
      <MSvg name="downArrow" className={classes['container__icon']} />
      {optionsContainerRender}
    </div>
  );
};

MSelectView.displayName = 'MSelectView';
MSelectView.defaultProps = {};

export default MSelectView;