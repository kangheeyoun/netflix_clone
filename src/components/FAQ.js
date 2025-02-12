import { useState } from "react";
import { VscAdd,VscChromeClose } from "react-icons/vsc";

const FAQList = [
    {id:1, 
        Q:"넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
        A:"넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다."
    },
    {id:2, 
        Q:"넷플릭스란 무엇인가요?",
        A:"넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다."
    },
    {id:3, 
        Q:"넷플릭스 요금은 얼마인가요?",
        A:"스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다."
    },
    {id:4, 
        Q:"어디에서 시청할 수 있나요?",
        A:"언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다. iOS 또는 Android용 앱에서는 좋아하는 시리즈를 저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요."
    },
    {id:5, 
        Q:"멤버십을 해지하려면 어떻게 하나요?",
        A:"넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요."
    },
    {id:6, 
        Q:"아이들이 넷플릭스를 봐도 좋을까요?",
        A:"멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다. 키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다."
    }
];
const FAQ = () => {
    const [openIdx,setOpenIdx] = useState(null);
    const handleClick = (idx)=>{
        // setOpenIdx(idx);
        setOpenIdx(openIdx===idx ? null : idx);
    }
    return (
        <div className="faq">
            <h2>자주 묻는 질문</h2>
                <ul className="faq-list">
                    {
                        FAQList.map((list,idx)=>{
                           return <li key={list.id}>
                            <button 
                                onClick={()=>handleClick(idx)}>
                                <span>{list.Q}</span>
                                {openIdx === idx ? <VscChromeClose /> : <VscAdd />}
                            </button>
                            {/* {openIdx === idx && <p>{list.A}</p>} */}
                            {<p className={openIdx === idx? "open":""}>{list.A}</p>}
                           </li>
                        })
                    }
                </ul>
        </div>
    );
};

export default FAQ;