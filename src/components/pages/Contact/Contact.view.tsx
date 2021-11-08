import React from 'react';
import Input from '../../ui/Input/Input';
import MSvg from '../../ui/MSvg/MSvg';

import MTopic from '../../ui/MTopic/MTopic';
import MSelect from '../../ui/MSelect/MSelect';

import { Topic } from '../../../models/shared/enumerations';

import icons from '../../../assets/icons';

import classes from './Contact.module.scss';

interface Props {
  readonly iconName: keyof typeof icons;
  readonly message: string;
  readonly messageChangeHandler: (value: string) => void;
  readonly submitHandler: (e: React.FormEvent) => void;
  onTopicSelect: (topic: Topic) => void;
  topicFilter: Topic | null;
}

const ContactView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {

  const topicSelectOptions = [
    { value: Topic.Other, label: 'Other' },
    { value: Topic.Delivery, label: 'Delivery' },
    { value: Topic.OrderIssues, label: 'Order Issues' },
    { value: Topic.ReturnsAndRefunds, label: 'Returns and Refunds' },
    { value: Topic.Technical, label: 'Technical' },
  ];

  let topicSelectPlaceholder = 'Choose Topic';

  if (props.topicFilter === Topic.Other) {
    topicSelectPlaceholder = 'Other';
  }

  if (props.topicFilter === Topic.Delivery) {
    topicSelectPlaceholder = 'Delivery';
  }

  if (props.topicFilter === Topic.OrderIssues) {
    topicSelectPlaceholder = 'Order Issues';
  }

  if (props.topicFilter === Topic.ReturnsAndRefunds) {
    topicSelectPlaceholder = 'Returns and Refunds';
  }

  if (props.topicFilter === Topic.Technical) {
    topicSelectPlaceholder = 'Technical';
  }

  return (
    <div className={classes['outerContainer']}>
      <div className={classes['innerContainer']}>
        <div className={classes['formContainer']}>
          <form className={classes['form']} onSubmit={props.submitHandler}>
            <h1 className={classes['form__header']}>Contact Us!</h1>
            <MSelect
              className={classes['form__select']}
              placeholder={topicSelectPlaceholder}
              options={topicSelectOptions}
              withActiveBorder
              selectOptionHandler={props.onTopicSelect}
            />
            <Input
              className={classes['form__input']}
              placeholder='message'
              value={props.message}
              changeHandler={props.messageChangeHandler}
            />
            <button
              className={classes['form__button']}
              type='submit'>
              Submit
            </button>  
          </form>
        </div>
        <MSvg
          name='contact'
          className={classes['svgContainer']} 
        />
      </div>
    </div>
  );
};

ContactView.displayName = 'ContactView';
ContactView.defaultProps = {};

export default ContactView;
