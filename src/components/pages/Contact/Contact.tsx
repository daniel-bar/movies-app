import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';

import * as authActions from '../../../store/actions/auth';
import { backendAPIAxios } from '../../../utils/http';
import { IUser } from '../../../models/user';

import { IContactResponse } from '../../../models/response/contact';
import { Topic } from '../../../models/shared/enumerations';

import icons from '../../../assets/icons';

import ContactView from './Contact.view';

interface PropsFromDispatch {
  login: (user: IUser) => authActions.Login;
}

interface Props extends PropsFromDispatch { 
  readonly iconName: keyof typeof icons;
}

const Contact: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const sessionData = sessionStorage.getItem('contact');

  const [ messageState, setMessageState ] = useState<string>('');
  
  const topicFilter = useMemo(() => {
    if (sessionData) {
      const sessionDataObject: Readonly<{
        topic?: Topic;
      }> = JSON.parse(sessionData);
      
      return sessionDataObject.topic ?? null;
    }
    
    return null;
  }, [ sessionData ]);
  
  const [ filtersState, setFiltersState ] = useState<{
    topic: Topic;
  }>({ topic: topicFilter ?? Topic.Other });

    const onTopicSelect = (topic: Topic) => {
    const sessionDataObject: Readonly<{
      topic?: Topic;
    }> = JSON.parse(sessionData ?? '{}');

    sessionStorage.setItem('contact', JSON.stringify({
      ...sessionDataObject,
      topic,
    }));

    setFiltersState((prev) => {
      const newFilters = {
        ...prev,
        topic,
      };

      return newFilters;
    });
  }

  const messageChangeHandler = (value: string) => setMessageState(() => value);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    backendAPIAxios.post('/contact', {
      topic: topicFilter,
      message: messageState,
    }).then((response: AxiosResponse<IContactResponse>) => {
      if (!response.data.success) {
        return alert(`Failed to get prices with error: ${response.data.message}`)
      }

      setFiltersState(() => response.data.data!);
    })  
    .catch((e: AxiosError) => {
      alert(`Failed to contact with error: ${e}`);
    });
  };

  console.log()

  return (
    <ContactView
      iconName={props.iconName}
      message={messageState}
      messageChangeHandler={messageChangeHandler}
      submitHandler={submitHandler}
      onTopicSelect={onTopicSelect}
      topicFilter={topicFilter}
    >{props.children}</ContactView>
  );
};

Contact.displayName = 'Contact';
Contact.defaultProps = {};

const mapDispatchToProps = (dispatch: Dispatch<authActions.AuthTypes>): PropsFromDispatch => {
  return {
    login: (user: IUser): authActions.Login => dispatch(authActions.login(user)),
  };
};

export default connect(null, mapDispatchToProps)(Contact);
