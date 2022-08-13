import { BodyText } from '@/components/ui';
import { AuthStatusEnum } from '@/types/auth';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { NavigationSC } from './Navigation.styled';

const Navigation: React.FC = () => {
  const { data, status } = useSession();
  return (
    <NavigationSC>
      <p>Cryptovision</p>
      {status === AuthStatusEnum.AUTHENTICATED ? (
        <div className="user-wrapper">
          {/* TODO: add avatar UI component */}
          {data?.user?.image ? (
            <div className="user-avatar">
              <Image
                src={data?.user?.image}
                width={40}
                height={40}
                alt="profile picture"
                unoptimized
              />
            </div>
          ) : null}
          <BodyText>{data?.user?.email}</BodyText>
          <button onClick={() => signOut()}>log out</button>
        </div>
      ) : (
        <button
          onClick={() =>
            signIn('github', {
              callbackUrl: '/',
            })
          }
        >
          log in
        </button>
      )}
    </NavigationSC>
  );
};

export default Navigation;
