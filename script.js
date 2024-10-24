const questions = [
    {
        question: "친구가 약속 시간에 30분 늦는다고 연락했다.",
        answers: [
            { text: "기다리는 동안 혼자 카페에서 시간을 보낸다", type: "나도 몰라용:)", score: 1 },
            { text: "\"다음에 보자\"며 약속을 취소한다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "갑자기 계획에 없던 발표를 하라고 한다.",
        answers: [
            { text: "무대에 올라가서 그때그때 말할 내용을 정한다", type: "나도 몰라용:)", score: 1 },
            { text: "발표할 주제와 순서를 머릿속으로 빠르게 정리하고 시작한다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "아주 바쁜 일주일 중 휴일 하루가 생겼다.",
        answers: [
            { text: "그냥 쉬면서 그때그때 하고 싶은 대로 한다", type: "나도 몰라용:)", score: 1 },
            { text: "하루 동안 하고 싶은 활동들을 미리 계획해서 시간을 최대한 활용한다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "친구가 서프라이즈 파티를 열어준다고 갑자기 집으로 초대했다.",
        answers: [
            { text: "예상치 못했지만 기분 좋게 참여한다", type: "나도 몰라용:)", score: 1 },
            { text: "예상 못한 상황이라 긴장되고 부담스럽다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "새로 시작한 취미활동 모임에서 모두가 처음 보는 사람들이다.",
        answers: [
            { text: "먼저 다가가서 인사를 하고 대화를 시작한다", type: "나도 몰라용:)", score: 1 },
            { text: "다른 사람들이 먼저 말을 걸어줄 때까지 기다린다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "회사에서 새로운 프로젝트를 맡게 되었는데 처음 하는 분야다.",
        answers: [
            { text: "일단 경험이 중요하니까 열심히 해본다", type: "나도 몰라용:)", score: 1 },
            { text: "관련된 정보를 최대한 조사하고 준비한다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "급하게 가야 하는 목적지까지 가는 길이 여러 가지 있다.",
        answers: [
            { text: "그냥 가장 빨라 보이는 길로 간다", type: "나도 몰라용:)", score: 1 },
            { text: "지도를 보고 가장 확실한 길을 찾아간다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "동료가 도움을 요청했을 때 내가 해야 할 일도 있는 상황이다.",
        answers: [
            { text: "일단 내 일을 먼저 끝낸 후 여유가 되면 도와준다", type: "나도 몰라용:)", score: 1 },
            { text: "내 일이 좀 밀리더라도 곧바로 도와준다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "새로운 동아리 활동을 시작하려고 한다.",
        answers: [
            { text: "사람들과 빠르게 친해질 수 있는 활동을 찾는다", type: "나도 몰라용:)", score: 1 },
            { text: "내가 관심있는 분야의 활동을 찾아본다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "여행을 계획할 때 일정은 어떻게 짜는가?",
        answers: [
            { text: "여유 있게 가고 싶은 곳만 대략적으로 정한다", type: "나도 몰라용:)", score: 1 },
            { text: "세부 일정까지 철저히 계획을 세운다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "갑자기 기분 전환이 필요할 때 어떻게 하는가?",
        answers: [
            { text: "즉흥적으로 산책을 나간다", type: "나도 몰라용:)", score: 1 },
            { text: "기분 전환을 위해 미리 계획했던 활동을 한다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "팀 프로젝트에서 역할을 맡을 때 어떤 방식을 선호하는가?",
        answers: [
            { text: "다른 사람들과 협력하며 일하는 역할을 맡는다", type: "나도 몰라용:)", score: 1 },
            { text: "혼자서 할 수 있는 부분을 맡아 효율적으로 처리한다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "주말에 갑자기 약속이 취소되었다면?",
        answers: [
            { text: "집에서 혼자 편안하게 쉰다", type: "나도 몰라용:)", score: 1 },
            { text: "다른 친구에게 연락해서 새로운 계획을 세운다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "새로운 취미를 시작할 때 어떻게 접근하는가?",
        answers: [
            { text: "자료를 찾아보고 준비 후 시작한다", type: "나도 몰라용:)", score: 1 },
            { text: "일단 바로 시작해보며 경험한다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "사람이 많은 파티에 초대받았을 때 기분은?",
        answers: [
            { text: "많은 사람들과 교류하는 게 기대된다", type: "나도 몰라용:)", score: 1 },
            { text: "사람이 많아 부담스럽다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "새로운 기술을 배울 때 어떤 방식을 선호하는가?",
        answers: [
            { text: "차근차근 계획적으로 배워나간다", type: "나도 몰라용:)", score: 1 },
            { text: "일단 도전하고 시행착오를 통해 배운다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "친구가 갑자기 여행을 제안한다면?",
        answers: [
            { text: "즉흥적으로 가자고 한다", type: "나도 몰라용:)", score: 1 },
            { text: "예산과 일정 등을 먼저 고려해본다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "중요한 결정을 내려야 할 때, 어떤 방식을 선호하는가?",
        answers: [
            { text: "직감에 따라 결정한다", type: "나도 몰라용:)", score: 1 },
            { text: "철저히 정보를 수집하고 분석한 후 결정한다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "회의 중에 의견이 충돌하면 어떻게 대처하는가?",
        answers: [
            { text: "상대방의 의견을 존중하고 타협점을 찾는다", type: "나도 몰라용:)", score: 1 },
            { text: "내 의견을 끝까지 주장한다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "새로운 친구를 사귈 때 어떤 방식이 더 편한가?",
        answers: [
            { text: "먼저 다가가서 말을 건다", type: "나도 몰라용:)", score: 1 },
            { text: "상대방이 다가오기를 기다린다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "스트레스를 해소할 때 어떤 방식을 선호하는가?",
        answers: [
            { text: "혼자 조용히 쉬면서 정리한다", type: "나도 몰라용:)", score: 1 },
            { text: "친구들과 만나서 이야기하며 풀어낸다", type: "나도 몰라용:)", score: 1 }
        ]
    },
    {
        question: "새로운 음식을 시도할 때 어떤 태도를 가지는가?",
        answers: [
            { text: "모험적으로 다양한 음식을 시도해본다", type: "나도 몰라용:)", score: 1 },
            { text: "안전하게 익숙한 음식을 선택한다", type: "나도 몰라용:)", score: 1 }
        ]
    }
];

let currentQuestionIndex = 0;
let scores = {
    "나도 몰라용:)": 0,
    "나도 몰라용:)": 0,
    "나도 몰라용:)": 0,
    "나도 몰라용:)": 0
};

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answersContainer = document.getElementById('answers-container');

    if (!questionElement || !answersContainer) {
        console.error("HTML 요소를 찾을 수 없습니다. HTML 파일에 올바른 ID를 가진 요소들이 있는지 확인하세요.");
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answersContainer.innerHTML = '';

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text; // 각 버튼에 선택지 텍스트 설정
        button.classList.add('answer-button', 'animated-button');
        button.onclick = () => nextQuestion(answer.type);
        answersContainer.appendChild(button);
    });
}

function nextQuestion(selectedType) {
    scores[selectedType] += 1;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let highestScore = 0;
    let personalityType = '';

    for (const type in scores) {
        if (scores[type] > highestScore) {
            highestScore = scores[type];
            personalityType = type;
        }
    }

    const resultElement = document.getElementById('quiz-container');
    if (!resultElement) {
        console.error("결과를 표시할 HTML 요소를 찾을 수 없습니다. HTML 파일에 올바른 ID를 가진 요소가 있는지 확인하세요.");
        return;
    }

    // 결과 이미지를 추가하는 부분
    const imageUrl = getPersonalityImage(personalityType);
    const shinchanImageUrl = "C:\Users\seeun\Downloads\짱구.jpg";
    resultElement.innerHTML = `
        <div class="result-container">
            <h2 class="result-title">당신의 성향은: ${personalityType}</h2>
            <p class="result-description"> ${personalityType}</p>
            <p class="result-features"> ${getPersonalityDescription(personalityType)}</p>
        </div>
    `;
}

function getPersonalityDescription(type) {
    const descriptions = {
        "나도 몰라용:)": "27개 질문 대답하느라 수고했어용^.^",
        "나도 몰라용:)": "27개 질문 대답하느라 수고했어용^.^",
        "나도 몰라용:)": "27개 질문 대답하느라 수고했어용^.^",
        "나도 몰라용:)": "27개 질문 대답하느라 수고했어용^.^"
    };
    return descriptions[type];
}

function getPersonalityImage(type) {
    const images = {
        "나도 몰라용:)": "images/seunping.png",
        "나도 몰라용:)": "images/cheolbyukping.png",
        "나도 몰라용:)": "images/socialping.png",
        "나도 몰라용:)": "images/freeping.png"
    };
    return images[type];
}

// HTML의 quiz-container에서 질문 표시하기
document.addEventListener('DOMContentLoaded', (event) => {
    currentQuestionIndex = 0; // 퀴즈가 시작될 때 인덱스를 초기화합니다.
    scores = { "나도 몰라용:)": 0, "나도 몰라용:)": 0, "나도 몰라용:)": 0, "나도 몰라용:)": 0 }; // 점수도 초기화합니다.
    showQuestion();
});

/* 추가적인 CSS 스타일을 포함해 페이지를 더욱 꾸미기 위해 HTML 파일에 아래 코드를 추가하세요. */

// CSS 스타일을 추가하기 위해 HTML 파일에 아래 코드를 추가하세요.
/*
<style>
    body {
        background: linear-gradient(135deg, #a8edea, #fed6e3);
        font-family: 'Comic Sans MS', cursive, sans-serif;
        text-align: center;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #quiz-container {
        max-width: 700px;
        margin: 50px auto;
        padding: 40px;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
        border: 2px solid #f08ea0;
        animation: fadeIn 1s ease-in;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .answer-button {
        display: inline-block;
        margin: 15px;
        padding: 15px 25px;
        background: linear-gradient(135deg, #ff7eb3, #ff65a3);
        border: none;
        border-radius: 30px;
        color: #fff;
        font-weight: bold;
        font-size: 1.2em;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    }

    .answer-button:hover {
        transform: translateY(-5px) scale(1.05);
        background: linear-gradient(135deg, #ff65a3, #ff9b85);
    }

    .result-container {
        padding: 30px;
        border-radius: 20px;
        background: #ffffff;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        margin-top: 30px;
        animation: bounceIn 1s ease;
    }

    @keyframes bounceIn {
        0% { transform: scale(0.5); opacity: 0; }
        60% { transform: scale(1.05); opacity: 1; }
        100% { transform: scale(1); }
    }

    .result-title {
        color: #ff6f61;
        font-size: 2em;
        font-weight: bold;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    }

    .result-image {
        max-width: 80%;
        height: auto;
        border-radius: 15px;
        margin: 20px 0;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
    }

    .result-description, .result-features {
        color: #333;
        font-size: 1.4em;
        line-height: 1.6;
    }

    .animated-button {
        animation: pop 0.3s ease-in-out;
    }

    @keyframes pop {
        0% { transform: scale(0.9); }
        100% { transform: scale(1); }
    }
</style>
*/
