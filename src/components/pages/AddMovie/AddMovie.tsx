import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';

import * as authActions from '../../../store/actions/auth';
import { backendAPIAxios } from '../../../utils/http';
import { IUser } from '../../../models/user';

import { IAddMovieResponse } from '../../../models/response/movie';
import { Category } from '../../../models/shared/enumerations';

import icons from '../../../assets/icons';

import AddMovieView from './AddMovie.view';

interface PropsFromDispatch {
  login: (user: IUser) => authActions.Login;
}

interface Props extends PropsFromDispatch { 
  readonly iconName: keyof typeof icons;
}

const AddMovie: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const sessionData = sessionStorage.getItem('AddMovie');

  const [ titleState, setTitleState ] = useState<string>('');
  const [ descriptionState, setDescriptionState ] = useState<string>('');
  
  const categoryFilter = useMemo(() => {
    if (sessionData) {
      const sessionDataObject: Readonly<{
        category?: Category;
      }> = JSON.parse(sessionData);
      
      return sessionDataObject.category ?? null;
    }
    
    return null;
  }, [ sessionData ]);
  
  const [ filtersState, setFiltersState ] = useState<{
    category: Category;
  }>({ category: categoryFilter ?? Category.Other });

  const onCategorySelect = (category: Category) => {
    const sessionDataObject: Readonly<{
      category?: Category;
    }> = JSON.parse(sessionData ?? '{}');

    sessionStorage.setItem('AddMovie', JSON.stringify({
      ...sessionDataObject,
      category,
    }));

    setFiltersState((prev) => {
      const newFilters = {
        ...prev,
        category,
      };

      return newFilters;
    });
  }

  const titleChangeHandler = (value: string) => setTitleState(() => value);
  const descriptionChangeHandler = (value: string) => setDescriptionState(() => value);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    backendAPIAxios.post('/add-movie', {
      category: categoryFilter,
    }).then((response: AxiosResponse<IAddMovieResponse>) => {
      if (!response.data.success) {
        return alert(`Failed to add movie with error: ${response.data.message}`)
      }

      setFiltersState(() => response.data.data!);
    })  
    .catch((e: AxiosError) => {
      alert(`Failed to add movie with error: ${e}`);
    });
  };

  // const [formState, inputHandler, setFormData] = useForm(
  //   {
  //     title: {
  //       value: '',
  //       isValid: false
  //     },
  //     description: {
  //       value: '',
  //       isValid: false
  //     },
  //   },
  //   false
  // );

  return (
    <AddMovieView
      iconName={props.iconName}
      title={titleState}
      titleChangeHandler={titleChangeHandler}
      description={descriptionState}
      descriptionChangeHandler={descriptionChangeHandler}
      onCategorySelect={onCategorySelect}
      categoryFilter={categoryFilter}
      submitHandler={submitHandler}
      // inputHandler={inputHandler}
    >{props.children}</AddMovieView>
  );
};

AddMovie.displayName = 'AddMovie';
AddMovie.defaultProps = {};

const mapDispatchToProps = (dispatch: Dispatch<authActions.AuthTypes>): PropsFromDispatch => {
  return {
    login: (user: IUser): authActions.Login => dispatch(authActions.login(user)),
  };
};

export default connect(null, mapDispatchToProps)(AddMovie);