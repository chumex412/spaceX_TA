type CompanyInitialsType = { initials: string };

export type CompanyDetailsType = {
	name?: string;
	company?: string;
	cto?: string;
	ceo?: string;
};

export type CompanyDataType = {
	company: CompanyDetailsType;
};

export type DetailsPropTypes = CompanyDetailsType & CompanyInitialsType;

export type CelebrationPropTypes<T> = {
	smiley: string;
	Frame: T;
};
