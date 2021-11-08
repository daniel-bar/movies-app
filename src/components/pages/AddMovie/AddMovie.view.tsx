import React from 'react';
import Input from '../../ui/Input/Input';
import MSvg from '../../ui/MSvg/MSvg';

import MSelect from '../../ui/MSelect/MSelect';

import { Category } from '../../../models/shared/enumerations';

import icons from '../../../assets/icons';

import classes from './AddMovie.module.scss';

interface Props {
  readonly iconName: keyof typeof icons;
  readonly message: string;
  readonly messageChangeHandler: (value: string) => void;
  readonly submitHandler: (e: React.FormEvent) => void;
  onCategorySelect: (category: Category) => void;
  categoryFilter: Category | null;
}

const ContactView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {

  const categorySelectOptions = [
    { value: Category.Other, label: 'Other' },
    { value: Category.Action, label: 'Action' },
    { value: Category.Comedy, label: 'Comedy' },
    { value: Category.Drama, label: 'Drama' },
    { value: Category.Fantasy, label: 'Fantasy' },
    { value: Category.Horror, label: 'Horror' },
    { value: Category.Mystery, label: 'Mystery' },
    { value: Category.Romance, label: 'Romance' },
    { value: Category.Thriller, label: 'Thriller' },
    { value: Category.Western, label: 'Western' },
  ];

  let categorySelectPlaceholder = 'Choose Topic';

  if (props.categoryFilter === Category.Other) {
    categorySelectPlaceholder = 'Other';
  }

  if (props.categoryFilter === Category.Action) {
    categorySelectPlaceholder = 'Action';
  }

  if (props.categoryFilter === Category.Comedy) {
    categorySelectPlaceholder = 'Comedy';
  }

  if (props.categoryFilter === Category.Drama) {
    categorySelectPlaceholder = 'Drama';
  }

  if (props.categoryFilter === Category.Fantasy) {
    categorySelectPlaceholder = 'Fantasy';
  }

  if (props.categoryFilter === Category.Horror) {
    categorySelectPlaceholder = 'Horror';
  }

  if (props.categoryFilter === Category.Mystery) {
    categorySelectPlaceholder = 'Mystery';
  }

  if (props.categoryFilter === Category.Romance) {
    categorySelectPlaceholder = 'Romance';
  }

  if (props.categoryFilter === Category.Thriller) {
    categorySelectPlaceholder = 'Thriller';
  }

  if (props.categoryFilter === Category.Western) {
    categorySelectPlaceholder = 'Western';
  }

  return (
      <div className={classes['innerContainer']}>
        <MSvg
          name='addMovie'
          className={classes['svgContainer']} 
        />
        <div className={classes['formContainer']}>
          <form className={classes['form']} onSubmit={props.submitHandler}>
            <div className={classes['upperContainer']}>
              <div className={classes['upperContainer__1']}>
                <Input
                  className={classes['form__title']}
                  placeholder='title'
                  value={props.message}
                  changeHandler={props.messageChangeHandler}
                />
                <MSelect
                  className={classes['form__select']}
                  placeholder={categorySelectPlaceholder}
                  options={categorySelectOptions}
                  withActiveBorder
                  selectOptionHandler={props.onCategorySelect}
                />
              </div>
              <div className={classes['upperContainer__2']}>
                
              </div>
            </div>
            <Input
              className={classes['form__input']}
              placeholder='message'
              value={props.message}
              changeHandler={props.messageChangeHandler}
            />
            <button
              className={classes['form__button']}
              type='submit'>
              Add Movie
            </button>  
          </form>
        </div>
      </div>
  );
};

ContactView.displayName = 'ContactView';
ContactView.defaultProps = {};

export default ContactView;
