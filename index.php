
<?php
$pageTitle = "하늬에게 ❤️";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta name="theme-color" content="#170d18">
    <meta name="description" content="하늬에게 보내는 작은 편지 ❤️">
    <title><?= htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8') ?></title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="background-art" aria-hidden="true"></div>
    <div class="art-overlay" aria-hidden="true"></div>

    <main class="love-card">
        <div class="top-decoration" aria-hidden="true">✦</div>

        <p class="eyebrow">TO MY 공주님 HANI</p>

        <div class="heart-decoration" aria-hidden="true">♡</div>

        <h1>
            하늬야,<br>
            <span>나랑 사귈래?</span>
        </h1>

        <p class="subtitle">내 마음을 너에게 전하고 싶어.</p>

        <div class="divider-art" aria-hidden="true">
            <span></span> ✧ <span></span>
        </div>

        <p id="tease-message" class="tease-message"
           aria-live="polite">
            솔직하게 대답해 줘... 💌
        </p>

        <div class="button-stage" id="button-stage">
            <button id="yes-button" class="answer-button yes-button">
                <span aria-hidden="true">♥</span> 응, 좋아!
            </button>

            <button id="no-button" class="answer-button no-button">
                아니
            </button>
        </div>

        <p class="footer-note">
            WITH ALL MY HEART <span>♥</span>
        </p>
        <p>다비드</p>
    </main>

    <div class="floating-hearts" id="floating-hearts"
         aria-hidden="true"></div>
</body>
</html>

