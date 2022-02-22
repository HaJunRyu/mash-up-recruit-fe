import { applicationApiService } from '@/api/services';
import { ConfirmModalDialog, ApplicationDetailLayout } from '@/components';
import { usePreventPageChange } from '@/hooks';
import { Application } from '@/types/dto';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useState } from 'react';

interface ApplicationDetailProps {
  application: Application;
  isSubmited: boolean;
}

const ApplicationDetail = ({ application, isSubmited }: ApplicationDetailProps) => {
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [isOpenSuccessSubmitedModal, setIsOpenSuccessSubmitedModal] = useState(false);

  const { handleMoveAfterBlocking } = usePreventPageChange(setIsOpenConfirmModal, [
    isOpenConfirmModal,
    isOpenSuccessSubmitedModal,
  ]);

  const handleCloseConfirmModal = () => {
    setIsOpenConfirmModal(false);
  };

  return (
    <>
      <ApplicationDetailLayout
        application={application}
        isOpenSuccessSubmitedModal={isOpenSuccessSubmitedModal}
        setIsOpenSuccessSubmitedModal={setIsOpenSuccessSubmitedModal}
        isSubmited={isSubmited}
      />
      {isOpenConfirmModal && (
        <ConfirmModalDialog
          approvalButtonMessage="나가기"
          cancelButtonMessage="머물기"
          handleApprovalButton={handleMoveAfterBlocking}
          handleCancelButton={handleCloseConfirmModal}
          heading="지금..나가시게요..?"
          paragraph="저장 안된 내용은..날아갈 수 있다능.."
          setIsOpenModal={setIsOpenConfirmModal}
        />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ApplicationDetailProps> = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  const applicationsRes = await applicationApiService.getApplications({
    accessToken: session?.accessToken,
  });

  // TODO:(하준) API 실패 응답시 띄워 줄 UI나 동작이 정의되면 변경
  if (applicationsRes.code !== 'SUCCESS')
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };

  const applications = applicationsRes.data;

  const isSubmited = applications.some(({ status }) => status === 'SUBMITTED');

  const application = applications.find(
    ({ applicationId }) => applicationId === parseInt(context.params?.applicationId as string, 10),
  );

  if (!application) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: {
      application,
      isSubmited,
    },
  };
};

export default ApplicationDetail;
