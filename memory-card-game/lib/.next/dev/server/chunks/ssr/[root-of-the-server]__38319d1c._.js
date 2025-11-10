module.exports = [
"[project]/memory-card-game/components/Card.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function Card({ card, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `w-24 h-24 m-2 cursor-pointer rounded-lg flex items-center justify-center text-3xl font-bold
        ${card.flipped || card.matched ? "bg-white text-black" : "bg-slate-700"}`,
        onClick: ()=>!card.flipped && !card.matched && onClick(card),
        children: card.flipped || card.matched ? card.icon : "?"
    }, void 0, false, {
        fileName: "[project]/memory-card-game/components/Card.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/memory-card-game/components/GameBoard.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameBoard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$memory$2d$card$2d$game$2f$components$2f$Card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/memory-card-game/components/Card.jsx [ssr] (ecmascript)");
;
;
function GameBoard({ cards, onCardClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-4 gap-4 p-4",
        children: cards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$memory$2d$card$2d$game$2f$components$2f$Card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                card: card,
                onClick: onCardClick
            }, card.id, false, {
                fileName: "[project]/memory-card-game/components/GameBoard.jsx",
                lineNumber: 8,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/memory-card-game/components/GameBoard.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/memory-card-game/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$memory$2d$card$2d$game$2f$components$2f$GameBoard$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/memory-card-game/components/GameBoard.jsx [ssr] (ecmascript)");
;
;
;
const icons = [
    "🍎",
    "🍌",
    "🍇",
    "🍓",
    "🍒",
    "🍍",
    "🥝",
    "🥑"
];
function Home() {
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [moves, setMoves] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [timerId, setTimerId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [gameWon, setGameWon] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [playerName, setPlayerName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>startGame(), []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (cards.length > 0 && cards.every((c)=>c.matched)) {
            clearInterval(timerId);
            setGameWon(true);
        }
    }, [
        cards
    ]);
    const startGame = ()=>{
        const shuffled = [
            ...icons,
            ...icons
        ].map((icon)=>({
                icon
            })).sort(()=>Math.random() - 0.5).map((card, index)=>({
                id: index,
                icon: card.icon,
                flipped: false,
                matched: false
            }));
        setCards(shuffled);
        setMoves(0);
        setTime(0);
        setGameWon(false);
        setPlayerName("");
        const id = setInterval(()=>setTime((t)=>t + 1), 1000);
        setTimerId(id);
    };
    const handleCardClick = (card)=>{
        if (selected.length === 2) return;
        setCards((p)=>p.map((c)=>c.id === card.id ? {
                    ...c,
                    flipped: true
                } : c));
        if (selected.length === 0) setSelected([
            card
        ]);
        else {
            setSelected(([first])=>{
                setMoves((m)=>m + 1);
                if (first.icon === card.icon) {
                    setCards((p)=>p.map((c)=>c.icon === card.icon ? {
                                ...c,
                                matched: true
                            } : c));
                    return [];
                } else {
                    setTimeout(()=>{
                        setCards((p)=>p.map((c)=>c.id === first.id || c.id === card.id ? {
                                    ...c,
                                    flipped: false
                                } : c));
                    }, 800);
                    return [];
                }
            });
        }
    };
    const saveScore = async ()=>{
        if (!playerName) return alert("Enter name!");
        await fetch("/api/leaderboard/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: playerName,
                moves,
                time
            })
        });
        startGame();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-900 text-white flex flex-col items-center p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-4",
                children: "Memory Card Game"
            }, void 0, false, {
                fileName: "[project]/memory-card-game/pages/index.js",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex gap-6 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-xl",
                        children: [
                            "⏱ Time: ",
                            time,
                            "s"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/memory-card-game/pages/index.js",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-xl",
                        children: [
                            "🎯 Moves: ",
                            moves
                        ]
                    }, void 0, true, {
                        fileName: "[project]/memory-card-game/pages/index.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: startGame,
                        className: "bg-blue-600 px-4 py-2 rounded-lg",
                        children: "Restart 🔁"
                    }, void 0, false, {
                        fileName: "[project]/memory-card-game/pages/index.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/memory-card-game/pages/index.js",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$memory$2d$card$2d$game$2f$components$2f$GameBoard$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                cards: cards,
                onCardClick: handleCardClick
            }, void 0, false, {
                fileName: "[project]/memory-card-game/pages/index.js",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            gameWon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mt-6 p-4 bg-green-600 rounded-lg text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold",
                        children: "🎉 YOU WIN!"
                    }, void 0, false, {
                        fileName: "[project]/memory-card-game/pages/index.js",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: "Enter your name to save score"
                    }, void 0, false, {
                        fileName: "[project]/memory-card-game/pages/index.js",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        className: "mt-2 p-2 rounded text-black",
                        placeholder: "Your Name",
                        value: playerName,
                        onChange: (e)=>setPlayerName(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/memory-card-game/pages/index.js",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: "ml-2 bg-black px-4 py-2 rounded",
                        onClick: saveScore,
                        children: "Save ✅"
                    }, void 0, false, {
                        fileName: "[project]/memory-card-game/pages/index.js",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/memory-card-game/pages/index.js",
                lineNumber: 109,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/memory-card-game/pages/index.js",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__38319d1c._.js.map