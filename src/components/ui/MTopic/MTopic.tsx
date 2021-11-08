import React, { useState } from 'react';

import { Topic } from '../../../models/shared/enumerations';

import MTopicView from './MTopic.view';

interface Props<OptionValue extends number, OptionLabel extends string> {
  className?: string;
  topicPlaceholder: string;
  options: { value: OptionValue, label: OptionLabel }[];
  onSearch: (searchQuery: string, searchBy: Topic) => void;
  inputValue?: string;
  selectedTopic?: Topic | null;
} 

const MTopic = <OptionValue extends number, OptionLabel extends string>(props: React.PropsWithChildren<Props<OptionValue, OptionLabel>>) => {
  const [ selectedTopicState, setSelectedTopicState ] = useState<Topic>(props.selectedTopic ?? Topic.Other);
  const [ inputValueState, setInputValueState ] = useState<string>(props.inputValue ?? '');

  const onSelectTopic = (topic: Topic) => {
    props.onSearch(inputValueState, topic);
    setSelectedTopicState(() => topic);
  };

  const onInputValue = (val: string) => {
    props.onSearch(val, selectedTopicState);
    setInputValueState(() => val);
  };

  return (
    <MTopicView
      className={props.className}
      topicPlaceholder={props.topicPlaceholder}
      options={props.options}
      selectedTopic={selectedTopicState}
      onInputValue={onInputValue}
      onSelectTopic={onSelectTopic}
      inputValue={inputValueState}
    >{props.children}</MTopicView>
  );
};

MTopic.displayName = 'MTopic';
MTopic.defaultProps = {};

export default MTopic;
