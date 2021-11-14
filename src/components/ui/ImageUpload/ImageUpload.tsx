import React, { RefObject, useEffect, useRef, useState } from 'react';

import ImageUploadView from './ImageUpload.view';

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

const ImageUpload: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const [ fileState, setFileState ] = useState<Blob>();
  const [ previewUrlState, setPreviewUrlState ] = useState<string | null>('');
  const [ isValidState, setIsValidState ] = useState<boolean>(false);

  const filePickerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!fileState) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrlState(fileReader.result as string);
    };
    fileReader.readAsDataURL(fileState);
  }, [fileState]);

  const pickedHandler = (event: { target: HTMLInputElement; }) => {
    let pickedFile;
    let fileIsValidState = isValidState;
    if ((event.target as HTMLInputElement).files && (event.target as HTMLInputElement).files!.length === 1) {
      pickedFile = (event.target as HTMLInputElement).files![0];
      setFileState(pickedFile);
      setIsValidState(true);
      fileIsValidState = true;
    } else {
      setIsValidState(false);
      fileIsValidState = false;
    }
    props.onInput!(props.id!, pickedFile, fileIsValidState);
  }

  const pickImageHandler = () => {
    if (filePickerRef.current != null) {
      filePickerRef.current.click();
    }
  }

  return (
    <ImageUploadView
      className={props.className}
      id={props.id}
      filePickerRef={filePickerRef}
      previewUrl={previewUrlState}
      isValid={isValidState}
      onChange={pickedHandler}
      onClick={pickImageHandler}
      onInput={props.onInput}
    >{props.children}</ImageUploadView>
  );
};

ImageUpload.displayName = 'ImageUpload';
ImageUpload.defaultProps = {};

export default ImageUpload;
