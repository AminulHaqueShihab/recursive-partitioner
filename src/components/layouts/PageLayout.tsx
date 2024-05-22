import React, { FC, ReactNode } from 'react';

type PageLayoutProps = {
	children?: ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	return <div>{children && children}</div>;
};

export default PageLayout;
