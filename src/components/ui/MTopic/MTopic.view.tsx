import React from 'react';

import { Topic } from '../../../models/shared/enumerations';

import MSelect from '../../ui/MSelect/MSelect';
import MSvg from '../MSvg/MSvg';

import classes from './MTopic.module.scss';

interface Props<TopicPlaceholder extends string, OptionValue extends number, OptionLabel extends string> {
  className?: string;
  topicPlaceholder: TopicPlaceholder | OptionLabel;
  options: { value: OptionValue, label: OptionLabel }[];
  selectedTopic: Topic;
  onInputValue: (val: string) => void;
  onSelectTopic: (topic: Topic) => void;
  inputValue: string;
}

const MTopicView = <TopicPlaceholder extends string, OptionValue extends number, OptionLabel extends string>(props: React.PropsWithChildren<Props<TopicPlaceholder, OptionValue, OptionLabel>>) => {

  const containerClasses: string = classes['container'] + (props.className ? ` ${props.className}` : '');

  return (
    <div className={containerClasses}>
      <MSelect
        className={classes['container__select']}
        placeholder={props.topicPlaceholder}
        options={props.options}
        selectOptionHandler={props.onSelectTopic}
      />
      <input
        className={classes['container__input']}
        placeholder='He'
        value={props.inputValue}
        onInput={({ currentTarget: { value } }) => props.onInputValue(value)}
      />
      <MSvg name="search" className={classes['container__icon']} />
    </div>
  );
};

MTopicView.displayName = 'MTopicView';
MTopicView.defaultProps = {};

export default MTopicView;
