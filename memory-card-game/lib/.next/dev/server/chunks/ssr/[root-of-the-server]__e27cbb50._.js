module.exports = [
"[project]/components/Card.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function Card({ card, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `w-24 h-24 rounded-lg cursor-pointer flex items-center justify-center text-3xl border-2 border-gray-500 duration-500 transform ${card.flipped ? "bg-green-500 rotate-y-180" : "bg-gray-700"}`,
        onClick: ()=>!card.flipped && onClick(card),
        children: card.flipped ? card.emoji : "❓"
    }, void 0, false, {
        fileName: "[project]/components/Card.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/GameBoard.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameBoard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Card.jsx [ssr] (ecmascript)");
;
;
function GameBoard({ cards, onCardClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-4 gap-4 mt-8",
        children: cards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                card: card,
                onClick: onCardClick
            }, card.id, false, {
                fileName: "[project]/components/GameBoard.jsx",
                lineNumber: 7,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/GameBoard.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GameBoard$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GameBoard.jsx [ssr] (ecmascript)");
;
;
;
const cardEmojis = [
    "🍎",
    "🍌",
    "🍇",
    "🍓",
    "🍒",
    "🥝",
    "🍍",
    "🍑"
];
function Home() {
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [firstCard, setFirstCard] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [secondCard, setSecondCard] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [disabled, setDisabled] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [moves, setMoves] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [gameOver, setGameOver] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const startGame = ()=>{
        const shuffledCards = [
            ...cardEmojis,
            ...cardEmojis
        ].sort(()=>0.5 - Math.random()).map((emoji, i)=>({
                id: i,
                emoji,
                flipped: false,
                matched: false
            }));
        setCards(shuffledCards);
        setFirstCard(null);
        setSecondCard(null);
        setDisabled(false);
        setMoves(0);
        setTime(0);
        setGameOver(false);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        startGame();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let timer;
        if (!gameOver) {
            timer = setInterval(()=>setTime((prev)=>prev + 1), 1000);
        }
        return ()=>clearInterval(timer);
    }, [
        gameOver
    ]);
    const handleCardClick = (card)=>{
        if (disabled || card.flipped) return;
        const updatedCards = [
            ...cards
        ];
        updatedCards[card.id].flipped = true;
        setCards(updatedCards);
        if (!firstCard) {
            setFirstCard(card);
        } else {
            setSecondCard(card);
            setDisabled(true);
            setMoves((m)=>m + 1);
            if (firstCard.emoji === card.emoji) {
                updatedCards[firstCard.id].matched = true;
                updatedCards[card.id].matched = true;
                setCards(updatedCards);
                resetTurn();
                if (updatedCards.every((c)=>c.matched)) {
                    setGameOver(true);
                }
            } else {
                setTimeout(()=>{
                    updatedCards[firstCard.id].flipped = false;
                    updatedCards[card.id].flipped = false;
                    setCards(updatedCards);
                    resetTurn();
                }, 800);
            }
        }
    };
    const resetTurn = ()=>{
        setFirstCard(null);
        setSecondCard(null);
        setDisabled(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold mb-4",
                children: "Memory Card Game 🎮"
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex gap-6 text-xl font-semibold",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Moves: ",
                            moves
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Time: ",
                            time,
                            "s"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GameBoard$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                cards: cards,
                onCardClick: handleCardClick
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: startGame,
                className: "mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition",
                children: "🔄 Restart Game"
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            gameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mt-6 flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-green-400 font-bold text-2xl",
                        children: [
                            "🎉 You Won in ",
                            moves,
                            " moves! ⏱ ",
                            time,
                            "s"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: "px-6 py-2 bg-yellow-600 rounded-lg hover:bg-yellow-700",
                        onClick: ()=>{
                            const name = prompt("Enter your name:");
                            if (name) {
                                __turbopack_context__.A("[project]/lib/api.js [ssr] (ecmascript, async loader)").then(({ submitScore })=>submitScore(name, moves, time)).then(()=>alert("Score submitted ✅")).catch(()=>alert("Submission failed ❌"));
                            }
                        },
                        children: "Save Score 📝"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: "/leaderboard",
                        className: "px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700",
                        children: "View Leaderboard 🏆"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 106,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e27cbb50._.js.map