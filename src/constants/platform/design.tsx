import { RECRUIT_DESIGN_PAGE, FAQ_DESIGN_PAGE, APPLY_DESIGN_PAGE } from '@/constants';
import DesignLeftEmoji from '@/assets/svg/design-left-emoji.svg';
import DesignRightEmoji from '@/assets/svg/design-right-emoji.svg';

const design = {
  id: 'productDesign',
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
      Mash-up의 Product Design 팀은 서비스의 경험을 설계하고 문제를 해결해요.
      <br />
      서비스 기획부터 인터페이스, 브랜딩, 프로토타이핑까지 모든 디자인을 유연하게 설계할 수 있는
      금손 팀원으로 구성돼요. 우리는 프로젝트 전체를 이해하고 개발자들과 적극적으로 소통하며 더 좋은
      프로젝트의 서비스 방향을 고민해요. 학생부터 현업 직장인까지 다양한 경험을 가진 사람들과의
      만남으로 디자인 지식과 트렌드를 공유하며 성장해 나가는 것을 추구하고 있어요. 번뜩이는
      아이디어를 멋진 서비스로 만들어내는 일을 함께할 디자이너를 기다리고 있어요.
    </>
  ),
  talent: [
    {
      id: 'design-talent-1',
      content: <>💁🏻 사용자의 관점에서 서비스를 설계하고 디자인할 수 있는 분!</>,
    },
    {
      id: 'design-talent-2',
      content: <>💻 개발자와 소통하여 문제를 잘 해결해나갈 수 있는 능력을 가지신 분!</>,
    },
    {
      id: 'design-talent-3',
      content: <>🏃🏼‍♀️ 프로젝트의 결과만큼 함께 만드는 과정도 중요하게 생각하시는 분!</>,
    },
    {
      id: 'design-talent-4',
      content: <>💬 자신의 생각을 다른 사람에게 이야기하는 것에 적극적인 분!</>,
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
      content: <>국내외 서비스 분석 및 아티클 스터디</>,
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
      title: { text: '디자인팀은 주로 어떤 활동을 하나요?' },
      content: [
        {
          id: 'design-question-1-1',
          content: (
            <>
              개발팀과 함께 기획의 시간을 가진 뒤, 협업을 진행하며 서비스를 완성시키는 공식 프로젝트
              하나를 진행해요.
            </>
          ),
        },
        {
          id: 'design-question-1-2',
          content: (
            <>
              프로젝트 진행 이외에도 디자인 팀원들끼리 플랫폼 세미나와 스터디를 열어, 디자인 지식을
              마음껏 공유할 수 있는 시간을 가지고 있어요!
            </>
          ),
        },
      ],
    },
    {
      id: 'design-question-2',
      title: { text: '디자인할 때 주로 어떤 툴을 사용하나요?' },
      content: [
        {
          id: 'design-question-2-1',
          content: (
            <>
              Figma, Sketch, XD 등 프로토타이핑 툴을 주로 사용해요. 프로젝트 팀 진행에서는
              개발자와의 협업을 위해 Zeplin을 활용하기도 해요. 팀원들과 합의를 통해 작업 툴을 맞출
              수 있어요.
            </>
          ),
        },
      ],
    },
    {
      id: 'design-question-3',
      title: { text: '프로덕트(UX/UI)관련 학과를 지원해야 하나요?' },
      content: [
        {
          id: 'design-question-3-1',
          content: (
            <>
              아니요! 매쉬업에서는 프로덕트 디자인에 관심 있는 사람이라면 환영해요. 다만, 프로덕트
              디자인에 대한 기본적인 이해도가 없다면 협업할 때 버거울 수 있다 생각해요. 꾸준히
              부족함을 채우기 위해 노력하는 열정과, 책임감을 가지고 있다면 충분해요 😄
            </>
          ),
        },
      ],
    },
    {
      id: 'design-question-4',
      title: { text: '포트폴리오를 웹 URL로 제출해도 되나요?' },
      content: [
        {
          id: 'design-question-4-1',
          content: <>네 가능해요! 지원서 제출 시 pdf에 링크를 첨부하여 제출해 주시면 됩니다.</>,
        },
      ],
    },
    {
      id: 'design-question-5',
      title: { text: '세미나와 스터디는 어떻게 진행되나요?' },
      content: [
        {
          id: 'design-question-5-1',
          content: (
            <>
              매 기수마다 선호도에 따라 진행하는 스터디와 세미나 주제가 다를 수 있어요. 팀원들이
              하고자 하는 새로운 주제가 있다면, 자유롭게 스터디를 만들 수 있어요! 지난 12기 때는
              팀원들의 관심사를 바탕으로 포트폴리오, 데이터 분석, 웹 스터디 등을 진행하였으니 참고
              부탁드려요.
            </>
          ),
        },
      ],
    },
    {
      id: 'design-question-6',
      title: { text: '경력이 없거나 동아리가 처음인 사람도 괜찮을까요?' },
      content: [
        {
          id: 'design-question-6-1',
          content: <>네 괜찮아요! 디자인에 대한 열정만 있다면 누구든지 함께할 준비가 되어있어요.</>,
        },
      ],
    },
  ],
};
export default design;
