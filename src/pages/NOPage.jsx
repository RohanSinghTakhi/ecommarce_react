import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import { Center } from '@chakra-ui/react';

function NOPage() {
  return (
    <Layout>
      <Center style={{ height: "90vh", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1 className='text-[100px] font-medium'>404 Not Found</h1>
        <p className='text-[20px] mt-3 mb-24'>Your visited page not found. You may go home page.</p>
        <Link to="/">
          <button type="button" className="btn btn-danger w-56 h-12">Back to home page</button>
        </Link>
      </Center>
    </Layout>
  );
}

export default NOPage;
