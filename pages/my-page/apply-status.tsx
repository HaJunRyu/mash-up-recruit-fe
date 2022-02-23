import { applicationApiService } from '@/api/services';
import { ApplyStatusLayout } from '@/components';
import { HOME_PAGE } from '@/constants';
import { Application } from '@/types/dto';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

interface ApplyStatusProps {
  applications: Application[];
}

const ApplyStatus = ({ applications }: ApplyStatusProps) => {
  return <ApplyStatusLayout applications={applications} />;
};

export default ApplyStatus;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: { destination: HOME_PAGE, permanent: false },
    };
  }

  const applications = await applicationApiService.getApplications({
    accessToken: session.accessToken,
  });

  if (applications.code === 'SUCCESS') {
    return { props: { applications: applications.data } };
  }

  return { props: {} };
};