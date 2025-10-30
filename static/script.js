const quizData = [
  {
    question: "收到簡訊說您信用卡被凍結，請點擊連結解凍，應該怎麼辦？",
    options: ["點擊連結立即解凍", "忽略簡訊並刪除", "撥打簡訊提供的電話號碼確認"],
    correct: 1,
  },
  {
    question: "陌生來電聲稱是警察，要求提供您的身份證號碼，應該？",
    options: ["立即配合提供", "要求對方出示證明再決定", "掛斷電話並聯繫當地警局核實"],
    correct: 2,
  },
  {
    question: "有人自稱公司老闆，要求您立即轉賬到指定賬戶，應該？",
    options: ["確認對方身份後再處理", "直接轉賬避免延誤", "聯繫公司核實信息"],
    correct: 2,
  },
  {
    question: "在社交平台遇到陌生人說有高回報投資機會，應該怎麼辦？",
    options: ["立即投資以免錯過機會", "忽略對方並封鎖", "詢問更多細節後再決定"],
    correct: 1,
  },
  {
    question: "自稱快遞公司來電，說包裹丟失需要提供銀行信息賠償，應該？",
    options: ["提供銀行信息以便處理", "要求對方提供更多證據", "直接掛斷電話"],
    correct: 2,
  },
  {
    question: "網購時，對方要求您脫離平台直接轉賬交易，應該？",
    options: ["同意對方建議", "拒絕並堅持通過平台交易", "與對方協商再決定"],
    correct: 1,
  },
  {
    question: "收到陌生郵件，內附連結要求登錄銀行賬戶，應該？",
    options: ["點擊連結登錄", "忽略郵件並刪除", "聯繫銀行客服核實"],
    correct: 1,
  },
  {
    question: "有人自稱親友，急需借錢但無法當面確認身份，應該？",
    options: ["立即匯款幫助對方", "要求對方提供更多證據", "聯繫其他親友核實信息"],
    correct: 2,
  },
  {
    question: "收到通知說您中了巨額獎金，需支付手續費領取，應該？",
    options: ["支付手續費領獎", "直接忽略並刪除", "聯繫對方確認細節"],
    correct: 1,
  },
  {
    question: "陌生人聲稱是技術支持，要求遠程控制您的電腦，應該？",
    options: ["授權對方操作", "詢問對方更多細節", "拒絕並聯繫官方客服"],
    correct: 2,
  },
  {
    question: "接到電話說家人發生意外，需要立即匯款，應該？",
    options: ["詢問更多細節後匯款", "聯繫家人或相關機構核實", "立即匯款避免延誤"],
    correct: 1,
  },
  {
    question: "陌生人提供高薪工作機會，但需先支付押金，應該？",
    options: ["支付押金獲得機會", "拒絕並報警", "先查詢對方公司背景"],
    correct: 1,
  },
  {
    question: "在社交軟件中，有人邀請加入賺錢群，應該？",
    options: ["加入並嘗試", "忽略並封鎖對方", "詢問朋友是否可信"],
    correct: 1,
  },
  {
    question: "接到銀行客服電話，要求提供驗證碼核實信息，應該？",
    options: ["提供驗證碼", "要求對方提供更多資料", "拒絕並聯繫官方客服"],
    correct: 2,
  },
  {
    question: "有人聲稱能幫您清除不良信用記錄，需提前支付費用，應該？",
    options: ["支付費用解決問題", "拒絕並掛斷電話", "詢問對方是否有其他方案"],
    correct: 1,
  },
  {
    question: "在網絡遊戲中，有人索要您的帳號密碼以幫助升級，應該？",
    options: ["提供密碼給對方", "拒絕並保護帳號安全", "詢問對方是否可信"],
    correct: 1,
  },
  {
    question: "接到電話說您涉嫌犯罪，需立即繳納保證金，應該？",
    options: ["立即支付保證金", "詢問對方更多細節", "掛斷電話並聯繫警方"],
    correct: 2,
  },
  {
    question: "有人聲稱低價出售名牌產品，但需提前匯款，應該？",
    options: ["提前匯款購買", "要求貨到付款", "拒絕並忽略對方"],
    correct: 2,
  },
  {
    question: "收到電子郵件說您中了獎，需直接回復個人信息領取，應該？",
    options: ["回復郵件領獎", "忽略並刪除郵件", "聯繫對方確認細節"],
    correct: 1,
  },
  {
    question: "在社交媒體上，有人主動借錢但無法提供身份證明，應該？",
    options: ["借錢幫助對方", "要求對方提供更多證據", "直接拒絕"],
    correct: 2,
  },
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  let quizHTML = `
    <div class="question">${currentQuiz.question}</div>
    <ul class="options">
      ${currentQuiz.options
        .map(
          (option, index) =>
            `<li>
              <label>
                <input type="radio" name="option" value="${index}">
                ${option}
              </label>
            </li>`
        )
        .join("")}
    </ul>
  `;
  quizContainer.innerHTML = quizHTML;
}

function showResult() {
  quizContainer.style.display = "none";
  nextButton.style.display = "none";
  resultContainer.style.display = "block";
  resultContainer.textContent = `測驗完成！你的得分是：${score}/${quizData.length}`;
}

nextButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("請選擇一個答案！");
    return;
  }
  if (parseInt(selectedOption.value) === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

loadQuestion();
nextButton.style.display = "block";