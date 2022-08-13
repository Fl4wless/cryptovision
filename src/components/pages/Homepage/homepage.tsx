import { getAssetsList } from '@/services/external/crypto/assets';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import React from 'react';
import Table from './components/Table';
import { HomepageSC } from './homepage.styled';

const Homepage: React.FC = () => {
  const { status, data: userData } = useSession();
  const { data, isLoading } = useQuery(['assetsList'], getAssetsList);

  console.log('data', data);

  return <HomepageSC>{data ? <Table data={data.data.data} /> : <p>loading...</p>}</HomepageSC>;
};

export default Homepage;
