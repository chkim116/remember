export interface UserLoginDto {
	email: string;
	password: string;
}

export interface UserData {
	id: string;
	username: string;
	email: string;
	isInvited: boolean;
}

export interface InitialState {
	userData: UserData;
}
