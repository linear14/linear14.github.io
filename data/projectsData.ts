interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '마실랭 (2022)',
    description: `🍸 취업 준비할 때 제작했던 칵테일 레시피 검색 서비스
    🥇 Fun.D 7기 최우수 프로젝트 선정
    🔥 < 지식 Zero > 학습 후 3개월 만에 전체 기능 구현 완료 & 배포
    `,
    imgSrc: '/static/images/masileng.webp',
    href: 'https://www.masileng.com',
  },
]

export default projectsData
