import React, { ForwardRefExoticComponent, RefAttributes, RefObject } from 'react';

import classes from './ImageUpload.module.scss';

interface Props {
  readonly className?: string;
  readonly id?: string;
  readonly filePickerRef?: React.RefObject<HTMLInputElement>;
  readonly previewUrl?: string | null;
  readonly isValid?: boolean;
  readonly onChange?: (event: { target: HTMLInputElement; }) => void;
  readonly onClick?: () => void;
  readonly onInput?: (id: string, pickedFile?: File, fileIsValidState?: boolean) => void;
  readonly type?: 'file';
  readonly style?: { display: string; };
  readonly accept?: '.jpg,.png,.jpeg';
}

const ImageUploadView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {

  return (
    <div className={classes['form']}>
      <input 
        id={props.id}
        ref={props.filePickerRef}
        style={{ display: 'none' }} 
        type='file' 
        accept='.jpg,.png,.jpeg'
        onChange={props.onChange}
      />
      <div className={classes['upload']}>
        <div className={classes['upload__preview']}>
          {props.previewUrl && <img src={props.previewUrl as string} alt="Preview" />}
          {!props.previewUrl && <p>Please pick an image.</p>}
        </div>
        <button type='button' onClick={props.onClick}>
          PICK IMAGE
        </button>
      </div>
    </div>
  );
};

ImageUploadView.displayName = 'ImageUpload';
ImageUploadView.defaultProps = {};

export default ImageUploadView;
