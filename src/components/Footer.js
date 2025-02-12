const fmenus = [
    {id:1, title:"자주묻는질문", url:"#"},
    {id:2, title:"고객센터", url:"#"},
    {id:3, title:"계정", url:"#"},
    {id:4, title:"미디어센터", url:"#"},
    {id:5, title:"투자정보(IR)", url:"#"},
    {id:6, title:"입사정보", url:"#"},
    {id:7, title:"넷플릭스 지원 디바이스", url:"#"},
    {id:8, title:"이용약관", url:"#"},
    {id:9, title:"개인정보처리방침", url:"#"},
    {id:10, title:"쿠키설정", url:"#"},
    {id:11, title:"회사정보", url:"#"},
    {id:12, title:"문의하기", url:"#"},
    {id:13, title:"속도테스트", url:"#"},
    {id:14, title:"법적고지", url:"#"},
    {id:15, title:"오직 넷플릭스에서", url:"#"}
];
const Footer = () => {
    return (
       <footer>
        <p>질문이 있으신가요? 문의 전화: <a href="tel:003083210161">00-308-321-0161 (수신자 부담)</a></p>
        <div className="f-menu">
            {
                fmenus.map((list)=>{
                    return <a key={list.id} href={list.url}>{list.title}</a>
                })
            }
        </div>
        <select>
            <option>한국어</option>
            <option>English</option>
        </select>
        <p className="ko">넷플릭스 대한민국</p>
        <div className="information">
        <p>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)</p>
        <p>대표: 레지널드 숀 톰프슨</p>
        <p>이메일 주소: korea@netflix.com</p>
        <p>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</p>
        <p>사업자등록번호: 165-87-00119</p>
        <p>클라우드 호스팅: Amazon Web Services Inc.</p>
        <a href="#">공정거래위원회 웹사이트</a>
        </div>
       </footer>
    );
};

export default Footer;