import { RECRUIT_DESIGN_PAGE, FAQ_DESIGN_PAGE, APPLY_DESIGN_PAGE } from '@/constants';
import DesignLeftEmoji from '@/assets/svg/design-left-emoji.svg';
import DesignRightEmoji from '@/assets/svg/design-right-emoji.svg';

const design = {
  name: 'Product Design',
  role: 'Product Designer',
  path: {
    recruit: RECRUIT_DESIGN_PAGE,
    faq: FAQ_DESIGN_PAGE,
    apply: APPLY_DESIGN_PAGE,
  },
  hero: {
    color: '#6220EE',
    emojis: [DesignLeftEmoji, DesignRightEmoji],
  },
  introduction: (
    <>
      Mash-up의 Product Design팀은 경험을 설계하고 문제를 해결합니다. 모든 디자인을 유연하게 설계할
      수 있는 열정있는 디자인 팀원으로 구성됩니다. 우리는 프로젝트 전체를 이해하고 개발자들과
      적극적으로 소통하며 더 좋은 프로젝트의 서비스 방향을 고민합니다. 학생부터 현직자까지 다양한
      사람들이 모여, 같은 공감대를 가지고 경험 및 디자인 트렌드를 공유하며 성장을 목표로 함께
      합니다. Product Design팀은 긍정적인 에너지로 분위기를 밝혀줄 수 있는 분과 함께 하고 싶습니다.
    </>
  ),
  talent: [
    {
      id: 'design-talent-1',
      content: <>사용자의 관점에서 서비스를 설계하고 디자인할 수 있는 분 </>,
    },
    {
      id: 'design-talent-2',
      content: <>개발자와 소통하여 문제를 잘 해결해나갈 수 있는 능력을 가지신 분</>,
    },
    {
      id: 'design-talent-3',
      content: <>높은 책임감을 가지고 주도적으로 프로젝트를 끝까지 완수할 수 있는 분</>,
    },
    {
      id: 'design-talent-4',
      content: <>긍정적인 에너지로 디자인팀의 분위기를 더욱 밝혀줄 수 있는 분</>,
    },
    {
      id: 'design-talent-5',
      content: <>혼자보단 함께를 좋아하시는 분</>,
    },
  ],
  study: [
    {
      id: 'design-study-1',
      content: <>포트폴리오 스터디</>,
    },
    {
      id: 'design-study-2',
      content: <>데이터 분석 스터디</>,
    },
    {
      id: 'design-study-3',
      content: <>서비스 분석 스터디</>,
    },
    {
      id: 'design-study-4',
      content: <>웹-개발 협업 스터디</>,
    },
  ],
  interview: [
    {
      id: 'design-interview-1',
      content: '토요일, 일요일',
    },
    {
      id: 'design-interview-2',
      content: '오전 10시 ~ 오후 6시',
    },
  ],
  questions: [
    {
      id: 'design-question-1',
      title: { emoji: '🙋‍♀️', text: '디자인팀은 무엇을 하나요?' },
      content: [
        {
          id: 'design-question-1-1',
          content: <>디자인팀 세미나</>,
          subItems: [
            {
              id: 'design-question-1-1-1',
              content: (
                <>
                  격주로 진행되며 디자인 팀원들이 모두 모여 디자인 이슈, 트렌드에 관한 정보를
                  공유하는 시간을 가집니다.
                </>
              ),
            },
          ],
        },
        {
          id: 'design-question-1-2',
          content: <>스터디</>,
          subItems: [
            {
              id: 'design-question-1-2-1',
              content: (
                <>
                  팀원들의 합의에 따라 다양한 분야의 디자인 스터디를 진행하게됩니다.
                  <br />
                  비슷한 관심사를 가진 디자이너들과 스터디를 꾸려 개개인의 성장을 도모합니다.
                </>
              ),
            },
          ],
        },
        {
          id: 'design-question-1-3',
          content: <>프로젝트 팀 활동</>,
          subItems: [
            {
              id: 'design-question-1-3-1',
              content: (
                <>
                  개발팀과 함께 기획의 시간을 가진 뒤, 협업을 진행하며 서비스 하나를 완성시키는 것이
                  목표입니다.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'design-question-2',
      title: { emoji: '🙋‍♀️', text: '디자인팀 에서는 어떤 스터디를 하나요?' },
      content: [
        {
          id: 'design-question-2-1',
          content: (
            <>
              매 기수마다 선호도에 따라 진행하는 스터디가 다를 수 있습니다. 팀원들이 스터디하고자
              하는 새로운 주제가 있다면, 자유롭게 스터디를 만들 수 있어요! 지난 11기 때는 팀원들의
              관심사를 바탕으로 포트폴리오, 데이터 분석, 웹 스터디 등을 진행하였으니 참고
              부탁드립니다.
            </>
          ),
        },
      ],
    },
    {
      id: 'design-question-3',
      title: { emoji: '🙋‍♀️', text: '디자인 할때 주로 어떤 툴을 주로 사용하나요?' },
      content: [
        {
          id: 'design-question-3-1',
          content: (
            <>
              Figma, Sketch,XD 등 프로토 타이핑 툴을 주로 사용합니다. 프로젝트 팀 진행에서는
              개발자와의 협업을 위해 Zeplin을 활용하기도 해요. 개개인이 많이 사용하는 익숙한 툴을
              사용해 주로 작업합니다.
            </>
          ),
        },
      ],
    },
    {
      id: 'design-question-4',
      title: { emoji: '🙋‍♀️', text: '꼭 프로덕트(UX/UI) 디자인 관련 과를 전공해야하나요?' },
      content: [
        {
          id: 'design-question-4-1',
          content: (
            <>
              아니요! 매쉬업에서는 프로덕트 디자인에 관심있는 사람이라면 환영입니다. 다만, 프로덕트
              디자인에 대한 기본적인 이해도가 없다면 협업할 때 버거울 수 있다 생각합니다. 꾸준히
              부족함을 채우기 위해 노력하는 열정과, 책임감을 가지고 있다면 충분하다 생각합니다.
            </>
          ),
        },
      ],
    },
    {
      id: 'design-question-5',
      title: { emoji: '🙋‍♀️', text: '포트폴리오를 웹 url로 제출해도 되나요?' },
      content: [
        {
          id: 'design-question-5-1',
          content: <>네 가능합니다. 지원서 제출 시 pdf에 링크를 첨부하여 제출해주시면 됩니다 :)</>,
        },
      ],
    },
  ],
};
export default design;
