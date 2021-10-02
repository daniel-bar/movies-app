interface IServerResponseData {
  readonly success: boolean;
  readonly message: string;
}

export interface IAutoLoginResponseData extends IServerResponseData {
  readonly data?: Readonly<{
    email: string;
    username: string;
  }>;
}

export interface IGetOTPResponse extends IServerResponseData { }

export interface IRegisterResponse extends IServerResponseData {
  readonly data?: Readonly<{ token: string }>;
}

export interface ILoginPasswordResponse extends IServerResponseData {
  readonly data?: Readonly<{
    token: string;
    username: string;
    email: string;
  }>;
}

export interface ILoginOTPResponse extends IServerResponseData {
  readonly data?: Readonly<{
    token: string;
    username: string;
    email: string;
  }>;
}