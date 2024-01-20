import { ScreenReaderOnly } from '@/components';
import { CURRENT_GENERATION, DAYS, RECRUIT_DATE } from '@/constants';
import dayjs from 'dayjs';
import * as Styled from './RecruitingProcess.styled';

const RecruitingProcess = () => {
  const {
    RECRUITMENT_START_KST_DATE,
    RECRUITMENT_END_KST_DATE,
    SCREENING_RESULT_ANNOUNCED_KST_DATE,
    INTERVIEW_START_KST_DATE,
    INTERVIEW_END_KST_DATE,
    INTERVIEW_RESULT_ANNOUNCED_KST_DATE,
    AFTER_FIRST_SEMINAR_JOIN_KST_DATE,
  } = RECRUIT_DATE;

  const DAYJS_RECRUITMENT_START_KST_DATE = dayjs(RECRUITMENT_START_KST_DATE);
  const DAYJS_RECRUITMENT_END_KST_DATE = dayjs(RECRUITMENT_END_KST_DATE);
  const DAYJS_SCREENING_RESULT_ANNOUNCED_KST_DATE = dayjs(SCREENING_RESULT_ANNOUNCED_KST_DATE);
  const DAYJS_INTERVIEW_START_KST_DATE = dayjs(INTERVIEW_START_KST_DATE);
  const DAYJS_INTERVIEW_INTERVIEW_END_KST_DATE = dayjs(INTERVIEW_END_KST_DATE);
  const DAYJS_INTERVIEW_RESULT_ANNOUNCED_KST_DATE = dayjs(INTERVIEW_RESULT_ANNOUNCED_KST_DATE);
  const DAYJS_AFTER_FIRST_SEMINAR_JOIN_KST_DATE = dayjs(AFTER_FIRST_SEMINAR_JOIN_KST_DATE);

  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.Heading data-aos="fade-up" data-aos-duration="600">
          Recruiting Process
        </Styled.Heading>
        <Styled.List data-aos="fade-up" data-aos-duration="800">
          <Styled.ListItem>
            <Styled.SubHeading>서류 접수</Styled.SubHeading>
            <ScreenReaderOnly>{`${DAYJS_RECRUITMENT_START_KST_DATE.format('YYYY년 M월 D일')} ${
              DAYS[DAYJS_RECRUITMENT_START_KST_DATE.day()]
            }요일부터 ${DAYJS_RECRUITMENT_END_KST_DATE.format('YYYY년 M월 D일')} ${
              DAYS[DAYJS_RECRUITMENT_END_KST_DATE.day()]
            }요일`}</ScreenReaderOnly>
            <Styled.Date aria-hidden>
              <time dateTime={DAYJS_RECRUITMENT_START_KST_DATE.format('YYYY-MM-DD')}>
                {`${DAYJS_RECRUITMENT_START_KST_DATE.format('MM.DD')}(${
                  DAYS[DAYJS_RECRUITMENT_START_KST_DATE.day()]
                })`}
              </time>
              &nbsp;~&nbsp;
              <time
                dateTime={DAYJS_RECRUITMENT_END_KST_DATE.format('YYYY-MM-DD')}
              >{`${DAYJS_RECRUITMENT_END_KST_DATE.format('MM.DD')}(${
                DAYS[DAYJS_RECRUITMENT_END_KST_DATE.day()]
              })`}</time>
            </Styled.Date>
            <Styled.Note>{`${DAYJS_RECRUITMENT_END_KST_DATE.format('HH:mm:ss')} 마감`}</Styled.Note>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.SubHeading>서류 결과 발표</Styled.SubHeading>
            <Styled.Date>
              <ScreenReaderOnly>{`${DAYJS_SCREENING_RESULT_ANNOUNCED_KST_DATE.format(
                'YYYY년 M월 D일',
              )} ${DAYS[DAYJS_SCREENING_RESULT_ANNOUNCED_KST_DATE.day()]}요일`}</ScreenReaderOnly>
              <time
                aria-hidden
                dateTime={DAYJS_SCREENING_RESULT_ANNOUNCED_KST_DATE.format('YYYY-MM-DD')}
              >
                {`${DAYJS_SCREENING_RESULT_ANNOUNCED_KST_DATE.format('MM.DD')}(${
                  DAYS[DAYJS_SCREENING_RESULT_ANNOUNCED_KST_DATE.day()]
                })`}
              </time>
            </Styled.Date>
            <Styled.Note>{`${DAYJS_SCREENING_RESULT_ANNOUNCED_KST_DATE.format(
              'HH',
            )}시`}</Styled.Note>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.SubHeading>온/오프라인 면접</Styled.SubHeading>
            <ScreenReaderOnly>{`${DAYJS_INTERVIEW_START_KST_DATE.format('YYYY년 M월 D일')} ${
              DAYS[DAYJS_INTERVIEW_START_KST_DATE.day()]
            }요일에서 ${DAYJS_INTERVIEW_INTERVIEW_END_KST_DATE.format('YYYY년 M월 D일')} ${
              DAYS[DAYJS_INTERVIEW_INTERVIEW_END_KST_DATE.day()]
            }요일`}</ScreenReaderOnly>
            <Styled.Date aria-hidden>
              <time
                dateTime={DAYJS_INTERVIEW_START_KST_DATE.format('YYYY-MM-DD')}
              >{`${DAYJS_INTERVIEW_START_KST_DATE.format('MM.DD')}(${
                DAYS[DAYJS_INTERVIEW_START_KST_DATE.day()]
              })`}</time>
              &nbsp;~&nbsp;
              <time
                dateTime={DAYJS_INTERVIEW_INTERVIEW_END_KST_DATE.format('YYYY-MM-DD')}
              >{`${DAYJS_INTERVIEW_INTERVIEW_END_KST_DATE.format('MM.DD')}(${
                DAYS[DAYJS_INTERVIEW_INTERVIEW_END_KST_DATE.day()]
              })`}</time>
            </Styled.Date>
            <Styled.Note>상세일정 이메일 확인</Styled.Note>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.SubHeading>최종 합격 발표</Styled.SubHeading>
            <Styled.Date>
              <ScreenReaderOnly>{`${DAYJS_INTERVIEW_RESULT_ANNOUNCED_KST_DATE.format(
                'YYYY년 M월 D일',
              )} ${DAYS[DAYJS_INTERVIEW_RESULT_ANNOUNCED_KST_DATE.day()]}요일`}</ScreenReaderOnly>
              <time
                aria-hidden
                dateTime={DAYJS_INTERVIEW_RESULT_ANNOUNCED_KST_DATE.format('YYYY-MM-DD')}
              >
                {`${DAYJS_INTERVIEW_RESULT_ANNOUNCED_KST_DATE.format('MM.DD')}(${
                  DAYS[DAYJS_INTERVIEW_RESULT_ANNOUNCED_KST_DATE.day()]
                })`}
              </time>
            </Styled.Date>
            <Styled.Note>{`${DAYJS_INTERVIEW_RESULT_ANNOUNCED_KST_DATE.format(
              'HH',
            )}시`}</Styled.Note>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.SubHeading>{CURRENT_GENERATION}기 OT</Styled.SubHeading>
            <Styled.Date>
              <ScreenReaderOnly>{`${DAYJS_AFTER_FIRST_SEMINAR_JOIN_KST_DATE.format(
                'YYYY년 M월 D일',
              )} ${DAYS[DAYJS_AFTER_FIRST_SEMINAR_JOIN_KST_DATE.day()]}요일`}</ScreenReaderOnly>
              <time
                aria-hidden
                dateTime={DAYJS_AFTER_FIRST_SEMINAR_JOIN_KST_DATE.format('YYYY-MM-DD')}
              >
                {`${DAYJS_AFTER_FIRST_SEMINAR_JOIN_KST_DATE.format('MM.DD')}(${
                  DAYS[DAYJS_AFTER_FIRST_SEMINAR_JOIN_KST_DATE.day()]
                })`}
              </time>
            </Styled.Date>
          </Styled.ListItem>
        </Styled.List>
      </Styled.Contents>
    </Styled.Container>
  );
};
export default RecruitingProcess;
