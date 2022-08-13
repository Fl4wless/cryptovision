import { AuthStatusEnum } from '@/types/auth';
import { getSession, useSession } from 'next-auth/react';
import React from 'react';

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const { status } = useSession();

  if (status === AuthStatusEnum.LOADING) {
    return null;
  }

  return <>{children}</>;
};

export default AuthWrapper;
